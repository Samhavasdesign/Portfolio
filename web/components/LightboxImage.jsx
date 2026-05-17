'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LightboxImage({ src, alt, width, height, imgStyle, unoptimized, decoding, draggable }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={unoptimized}
        decoding={decoding}
        draggable={draggable}
        onClick={() => setOpen(true)}
        style={{ ...imgStyle, cursor: 'zoom-in' }}
      />

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.93)',
            zIndex: 9999,
            overflow: 'auto',
            padding: '52px 12px 24px',
            cursor: 'zoom-out',
          }}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
            style={{
              position: 'fixed',
              top: '14px',
              right: '14px',
              background: 'rgba(255,255,255,0.12)',
              border: '0.5px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontSize: '18px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              lineHeight: 1,
            }}
          >
            ×
          </button>
          {/* Plain img in lightbox — no sizing constraints, full native resolution */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              margin: '0 auto',
              cursor: 'default',
            }}
          />
        </div>
      )}
    </>
  );
}
