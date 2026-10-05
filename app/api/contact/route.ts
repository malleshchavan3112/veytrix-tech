import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { InquirySchema } from '@/lib/validations/inquiry';
import { SITE_CONFIG } from '@/lib/constants/site';
import {
  generateStudioNotificationEmail,
  generateVisitorConfirmationEmail,
} from '@/lib/email/templates';

// In-memory sliding window rate limiter for development & edge environments
// Production persistent limiter can bind to Upstash Redis when configured
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';

    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            'Inquiry dispatch limit exceeded (maximum 5 submissions per hour). Please retry later or contact intake@veytrix.tech directly.',
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON body safely
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const payload = body as Record<string, unknown>;

    // 3. Cryptographic Bot Honeypot Defense
    if (
      typeof payload?.website_url_confirm === 'string' &&
      payload.website_url_confirm.trim() !== ''
    ) {
      // Silently accept bot submission without dispatching email
      return NextResponse.json(
        { success: true, message: SITE_CONFIG.responseCopy },
        { status: 200 }
      );
    }

    // 4. Server-Side Zod Schema Validation
    const validationResult = InquirySchema.safeParse(payload);
    if (!validationResult.success) {
      const issues = validationResult.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`);
      return NextResponse.json(
        { error: 'Invalid inquiry payload', details: issues },
        { status: 400 }
      );
    }

    const validData = validationResult.data;
    const timestamp = new Date().toISOString();

    // 5. Email Templates Synthesis
    const studioEmail = generateStudioNotificationEmail({
      ...validData,
      timestamp,
      ip,
    });

    const visitorEmail = generateVisitorConfirmationEmail({
      fullName: validData.fullName,
      companyName: validData.companyName,
      projectType: validData.projectType,
    });

    // 6. Resend Server-Side Integration
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || 'Veytrix Tech <intake@veytrix.tech>';
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || 'intake@veytrix.tech';

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        // Dispatch Veytrix Studio Notification
        const studioResult = await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          replyTo: validData.workEmail,
          subject: studioEmail.subject,
          text: studioEmail.text,
          html: studioEmail.html,
        });

        if (studioResult.error) {
          console.error('[Resend Studio Dispatch Error]:', studioResult.error.message);
          return NextResponse.json(
            {
              error:
                'Unable to deliver inquiry notification. Please retry shortly or email intake@veytrix.tech directly.',
            },
            { status: 502 }
          );
        }

        // Dispatch Visitor Confirmation Acknowledgment
        const visitorResult = await resend.emails.send({
          from: fromEmail,
          to: validData.workEmail,
          subject: visitorEmail.subject,
          text: visitorEmail.text,
          html: visitorEmail.html,
        });

        if (visitorResult.error) {
          // Log visitor confirmation failure safely without breaking the successful intake
          console.error('[Resend Visitor Acknowledgment Warning]:', visitorResult.error.message);
        }
      } catch (err) {
        console.error('[Email Dispatch Network Error]:', err instanceof Error ? err.message : 'Unknown network failure');
        return NextResponse.json(
          {
            error:
              'A mail delivery network interruption occurred. Please retry shortly or email intake@veytrix.tech directly.',
          },
          { status: 502 }
        );
      }
    } else {
      // Local development or preview without API key: log cleanly without leaking secrets
      console.log('--------------------------------------------------');
      console.log('⚡ [DEV INTAKE DISPATCH] Simulated Resend Transactional Emails:');
      console.log(`[Studio Notification] To: ${toEmail} | From: ${fromEmail}`);
      console.log(`Subject: ${studioEmail.subject}`);
      console.log(`From Client: ${validData.fullName} <${validData.workEmail}> (${validData.companyName})`);
      console.log(`[Visitor Confirmation] To: ${validData.workEmail} | Subject: ${visitorEmail.subject}`);
      console.log('--------------------------------------------------');
    }

    return NextResponse.json(
      {
        success: true,
        message: SITE_CONFIG.responseCopy,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Inquiry API Fatal Error]:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'An unexpected internal error occurred. Please contact intake@veytrix.tech.' },
      { status: 500 }
    );
  }
}
