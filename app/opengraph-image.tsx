import { ImageResponse } from 'next/og';

export const alt = 'Veytrix Tech — Design + Technology + Product Thinking';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#FBFBFD',
          padding: '80px',
          border: '12px solid #0F172A',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3B82F6',
              fontSize: '28px',
              fontWeight: 800,
              fontFamily: 'monospace',
            }}
          >
            V
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '24px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#0F172A',
              }}
            >
              VEYTRIX TECH
            </span>
            <span
              style={{
                fontSize: '13px',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                color: '#64748B',
              }}
            >
              STUDIO // DIGITAL PRODUCT &amp; TECHNOLOGY
            </span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '900px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
            }}
          >
            Design + Technology + Product Thinking
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#475569',
              marginTop: '24px',
              lineHeight: 1.4,
            }}
          >
            A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking.
          </div>
        </div>

        {/* Bottom Metadata Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '24px',
            borderTop: '1px solid #E2E8F0',
            fontFamily: 'monospace',
            fontSize: '16px',
            color: '#64748B',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
              }}
            />
            <span>SYS // OPERATIONAL</span>
          </div>
          <span>veytrix.tech</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
