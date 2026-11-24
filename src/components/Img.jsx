import { useState } from 'react';
import { u } from '../data/images';
// Lazy-loaded image with a graceful fallback so a dead link never shows a broken icon.
export default function Img({ src, alt, w = 1200, ratio, className = '', eager = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`img ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      {failed ? <div className="img-fallback" role="img" aria-label={alt} />
        : <img src={u(src, w)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />}
    </div>
  );
}
