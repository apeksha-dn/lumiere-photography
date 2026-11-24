import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { u } from '../data/images';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];
  const go = (d) => onNavigate((index + d + items.length) % items.length);
  useEffect(() => {
    const key = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  });
  if (!item) return null;
  return (
    <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button className="lb-btn lb-close" onClick={onClose} aria-label="Close"><X /></button>
      <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous image"><ChevronLeft /></button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={u(item.src, 1800)} alt={item.caption} />
        <figcaption>{item.caption} <span>{index + 1} of {items.length}</span></figcaption>
      </figure>
      <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next image"><ChevronRight /></button>
    </motion.div>
  );
}
