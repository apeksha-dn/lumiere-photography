import { Star } from 'lucide-react';
import Img from './Img';

export default function TestimonialCard({ t, large }) {
  return (
    <figure className={`quote ${large ? 'large' : ''}`}>
      <div className="stars" aria-label={`${t.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill={i < t.rating ? 'currentColor' : 'none'} />)}</div>
      <blockquote>{t.text}</blockquote>
      <figcaption>
        {t.photo && <Img src={t.photo} w={160} ratio="1/1" className="avatar" alt={`${t.name}, ${t.type} client`} />}
        <span><strong>{t.name}</strong><br />{t.type} (demo review)</span>
      </figcaption>
    </figure>
  );
}
