import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Img from './Img';
import Lightbox from './Lightbox';

export default function ImageGallery({ items }) {
  const [open, setOpen] = useState(null);
  if (!items.length) return <p className="empty">No photographs in this category yet.</p>;
  return (
    <>
      <div className="masonry">
        {items.map((it, i) => (
          <button key={it.id} className="tile" onClick={() => setOpen(i)} aria-label={`Open ${it.caption}`}>
            <Img src={it.src} w={800} ratio={it.ratio} alt={it.caption} />
            <span className="tile-cap">{it.caption}</span>
          </button>
        ))}
      </div>
      <AnimatePresence>{open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />}</AnimatePresence>
    </>
  );
}
