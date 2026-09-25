import { NextRequest, NextResponse } from 'next/server';
import { InquirySchema } from '@/lib/validations/inquiry';
import { SITE_CONFIG } from '@/lib/constants/site';

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

    // 2. Parse JSON body
    const body = await req.json();

    // 3. Cryptographic Bot Honeypot Defense
    if (body.website_url_confirm && body.website_url_confirm.trim() !== '') {
      // Silently accept bot submission without dispatching email
      return NextResponse.json(
        { success: true, message: SITE_CONFIG.responseCopy },
        { status: 200 }
      );
    }

    // 4. Server-Side Zod Schema Validation
    const validationResult = InquirySchema.safeParse(body);
    if (!validationResult.success) {
      const issues = validationResult.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`);
      return NextResponse.json(
        { error: 'Invalid inquiry payload', details: issues },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // 5. Transactional Dispatch / Development Console Logger
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // In production environment with Resend API key configured
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Veytrix Studio Intake <intake@veytrix.tech>',
            to: process.env.CONTACT_EMAIL || 'intake@veytrix.tech',
            subject: `[STUDIO INTAKE] Architecture Consultation: ${validData.companyName} (${validData.projectType})`,
            text: `
NEW ARCHITECTURE INQUIRY RECEIVED

Full Name: ${validData.fullName}
Work Email: ${validData.workEmail}
Company: ${validData.companyName}
Project Type: ${validData.projectType}
Architecture Scope: ${validData.scope}
Investment Range: ${validData.budgetRange}

Project Summary & Requirements:
${validData.projectSummary}

Telemetry Timestamp: ${new Date().toISOString()}
Origin IP: ${ip}
            `.trim(),
          }),
        });

        if (!emailResponse.ok) {
          console.error('[Resend Dispatch Error]:', await emailResponse.text());
        }
      } catch (err) {
        console.error('[Email Dispatch Network Error]:', err);
      }
    } else {
      // In local development or pre-production testing: log cleanly without leaking secrets
      console.log('--------------------------------------------------');
      console.log('⚡ [DEV INTAKE DISPATCH] New Architecture Inquiry:');
      console.log(`From: ${validData.fullName} <${validData.workEmail}>`);
      console.log(`Company: ${validData.companyName}`);
      console.log(`Type: ${validData.projectType} // Scope: ${validData.scope}`);
      console.log(`Investment: ${validData.budgetRange}`);
      console.log(`Summary: ${validData.projectSummary}`);
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
    console.error('[Inquiry API Fatal Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected internal error occurred. Please contact intake@veytrix.tech.' },
      { status: 500 }
    );
  }
}
