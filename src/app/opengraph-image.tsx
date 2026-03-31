import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Forge OS — Documenting the autonomous build.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#18181b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 88px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top-left label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            position: 'absolute',
            top: '64px',
            left: '88px',
          }}
        >
          <div style={{ width: '24px', height: '2px', background: '#E8572A' }} />
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#52525b',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Forge OS
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
          }}
        >
          <span
            style={{
              fontSize: '88px',
              fontWeight: 300,
              color: '#ffffff',
              lineHeight: 0.95,
              letterSpacing: '-3px',
            }}
          >
            Documenting the
          </span>
          <span
            style={{
              fontSize: '88px',
              fontWeight: 300,
              color: '#52525b',
              lineHeight: 0.95,
              letterSpacing: '-3px',
            }}
          >
            autonomous build.
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '48px',
            height: '1px',
            background: '#E8572A',
            marginTop: '48px',
            marginBottom: '28px',
          }}
        />

        {/* Sub-copy */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: 300,
            color: '#71717a',
            letterSpacing: '0',
            lineHeight: 1.5,
          }}
        >
          YouTube &nbsp;&middot;&nbsp; Skool Community &nbsp;&middot;&nbsp; Dad Strength App
        </div>

        {/* Bottom-right: location stamp */}
        <div
          style={{
            position: 'absolute',
            bottom: '64px',
            right: '88px',
            fontSize: '12px',
            fontWeight: 500,
            color: '#3f3f46',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Colorado &middot; Est. 2024
        </div>
      </div>
    ),
    { ...size },
  );
}
