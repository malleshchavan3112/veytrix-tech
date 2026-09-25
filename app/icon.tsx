import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#0F172A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          borderRadius: '6px',
          fontWeight: 800,
          fontFamily: 'monospace',
          border: '1px solid #334155',
        }}
      >
        <span style={{ color: '#3B82F6' }}>V</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
