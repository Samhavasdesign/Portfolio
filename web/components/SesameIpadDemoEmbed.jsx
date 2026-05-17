'use client';
import Image from 'next/image';

/** Begin iPad bezel asset (same as their PDP). */
const EMPTY_IPAD =
  'https://static.beginlearning.com/deployedassets/e386f8f7/static/img/components/empty-ipad.webp';

/**
 * Screen insets — from Begin inlined Emotion (mui-ok5h5a) on sesame-digital PDP.
 */
const BEGIN_SCREEN_INSET = {
  top: '7.7%',
  bottom: '9.49%',
  left: '11.1%',
  right: '9.75%',
};

const DEFAULT_HREF =
  'https://www.beginlearning.com/sesame-digital/pdp#:~:text=See%20It%20in%20Action%20%E2%80%93%20Play%20a%20Game%20Free!';

const DEFAULT_PREVIEW = '/images/work/sesame-begin-click-to-play-preview.png';

/**
 * iPad frame + static preview; entire screen area links out to Begin’s PDP
 * (optional text fragment to scroll to “See It in Action”).
 */
export default function SesameIpadDemoEmbed({
  label = 'Open Begin — Learn with Sesame Street, try a game section',
  previewSrc = DEFAULT_PREVIEW,
  href = DEFAULT_HREF,
}) {
  return (
    <div style={{ margin: '40px 0' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: BEGIN_SCREEN_INSET.top,
            left: BEGIN_SCREEN_INSET.left,
            right: BEGIN_SCREEN_INSET.right,
            bottom: BEGIN_SCREEN_INSET.bottom,
            zIndex: 0,
            overflow: 'hidden',
            background: '#000',
          }}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              minHeight: '200px',
              lineHeight: 0,
              position: 'relative',
            }}
          >
            <Image
              src={previewSrc}
              alt=""
              fill
              quality={95}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </a>
        </div>

        <Image
          src={EMPTY_IPAD}
          alt=""
          width={1000}
          height={750}
          quality={95}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: 'auto',
            display: 'block',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
