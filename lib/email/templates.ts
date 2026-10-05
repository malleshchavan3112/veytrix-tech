import { InquiryPayload } from '@/lib/validations/inquiry';

interface EmailTemplateProps extends InquiryPayload {
  timestamp: string;
  ip?: string;
}

export function generateStudioNotificationEmail(props: EmailTemplateProps) {
  const subject = 'New Project Inquiry — Veytrix Tech';

  const text = `
NEW PROJECT INQUIRY — VEYTRIX TECH
--------------------------------------------------
Submission Timestamp: ${props.timestamp}
Origin IP: ${props.ip || 'Unknown'}

CLIENT DETAILS:
- Full Name: ${props.fullName}
- Work Email: ${props.workEmail}
- Company: ${props.companyName}

PROJECT SCOPE:
- Project Type: ${props.projectType}
- Architectural Scope: ${props.scope}
- Budget Range: ${props.budgetRange || "Not sure / Let's discuss"}

PROJECT SUMMARY & REQUIREMENTS:
${props.projectSummary}
--------------------------------------------------
Veytrix Tech Studio Automated Intake
`.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 32px; color: #0F172A;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #0F172A; padding: 24px 32px; border-bottom: 2px solid #06B6D4;">
      <span style="font-family: monospace; font-size: 11px; letter-spacing: 0.1em; color: #38BDF8; text-transform: uppercase;">VTX-INTAKE // NEW INQUIRY</span>
      <h1 style="color: #FFFFFF; font-size: 20px; font-weight: 700; margin: 6px 0 0 0; letter-spacing: -0.02em;">New Project Inquiry — Veytrix Tech</h1>
    </div>
    
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B; width: 140px; text-transform: uppercase;">Full Name</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0F172A;">${props.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B; text-transform: uppercase;">Work Email</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0284C7;"><a href="mailto:${props.workEmail}" style="color: #0284C7; text-decoration: none;">${props.workEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B; text-transform: uppercase;">Company</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0F172A;">${props.companyName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B; text-transform: uppercase;">Project Type</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0F172A;">${props.projectType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B; text-transform: uppercase;">Scope</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0F172A;">${props.scope}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B; text-transform: uppercase;">Budget</td>
          <td style="padding: 8px 0; font-size: 14px; color: #0F172A;">${props.budgetRange || "Not sure / Let's discuss"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B; text-transform: uppercase;">Timestamp</td>
          <td style="padding: 8px 0; font-family: monospace; font-size: 12px; color: #64748B;">${props.timestamp}</td>
        </tr>
      </table>

      <div style="border-top: 1px solid #E2E8F0; padding-top: 20px;">
        <span style="font-family: monospace; font-size: 11px; letter-spacing: 0.08em; color: #64748B; text-transform: uppercase; display: block; margin-bottom: 8px;">Project Summary &amp; Requirements</span>
        <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${props.projectSummary}</div>
      </div>
    </div>

    <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px 32px; font-family: monospace; font-size: 11px; color: #94A3B8; text-align: center;">
      Veytrix Tech Studio · Origin IP: ${props.ip || '127.0.0.1'} · Telemetry Verified
    </div>
  </div>
</body>
</html>
`.trim();

  return { subject, text, html };
}

export function generateVisitorConfirmationEmail(props: {
  fullName: string;
  companyName: string;
  projectType: string;
}) {
  const subject = 'We received your project inquiry — Veytrix Tech';

  const text = `
Hello ${props.fullName},

Thank you for reaching out to Veytrix Tech regarding your ${props.projectType} inquiry for ${props.companyName}.

We've received your inquiry and will review the details shortly.

If you have additional design references, technical specifications, or timeline milestones to share in the interim, please reply directly to this email.

Best regards,
Veytrix Tech Studio
https://veytrix.tech
intake@veytrix.tech
`.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 32px; color: #0F172A;">
  <div style="max-width: 560px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #0F172A; padding: 24px 32px; border-bottom: 2px solid #06B6D4;">
      <span style="font-family: monospace; font-size: 11px; letter-spacing: 0.1em; color: #38BDF8; text-transform: uppercase;">VEYTRIX TECH // ACKNOWLEDGMENT</span>
      <h1 style="color: #FFFFFF; font-size: 18px; font-weight: 700; margin: 6px 0 0 0; letter-spacing: -0.02em;">We received your project inquiry</h1>
    </div>

    <div style="padding: 32px; font-size: 15px; line-height: 1.6; color: #334155;">
      <p style="margin-top: 0;">Hello ${props.fullName},</p>
      
      <p>Thank you for reaching out to <strong>Veytrix Tech</strong> regarding your <strong>${props.projectType}</strong> initiative for <strong>${props.companyName}</strong>.</p>
      
      <p style="background-color: #F0FDF4; border-left: 3px solid #10B981; padding: 12px 16px; margin: 20px 0; color: #166534; font-size: 14px;">
        We&apos;ve received your inquiry and will review the details shortly.
      </p>

      <p>Our founding engineering and design team reviews every submission with direct attention to architectural feasibility, design systems, and product scope.</p>

      <p style="margin-bottom: 0;">If you have supplementary technical architecture documents, design files, or specific milestones to share in the meantime, you can reply directly to this message.</p>
    </div>

    <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 20px 32px; font-size: 12px; color: #64748B;">
      <div style="font-weight: 600; color: #0F172A; margin-bottom: 4px;">Veytrix Tech Studio</div>
      <div>Design + Technology + Product Thinking</div>
      <div style="margin-top: 4px;"><a href="https://veytrix.tech" style="color: #0284C7; text-decoration: none;">https://veytrix.tech</a> · <a href="mailto:intake@veytrix.tech" style="color: #0284C7; text-decoration: none;">intake@veytrix.tech</a></div>
    </div>
  </div>
</body>
</html>
`.trim();

  return { subject, text, html };
}
