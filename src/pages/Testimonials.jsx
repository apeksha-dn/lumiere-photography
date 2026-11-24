import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import usePageMeta from '../hooks/usePageMeta';
import { testimonials } from '../data/testimonialsData';

export default function Testimonials() {
  usePageMeta('Client Testimonials', 'What our clients say about their sessions.');
  const avg = (testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length).toFixed(1);
  return (
    <div className="container page">
      <SectionHeading title="Kind words" text={`Demo reviews averaging ${avg} out of 5. These are placeholders, not verified customer reviews.`} />
      <div className="quotes wall">{testimonials.map((t, i) => <TestimonialCard key={t.id} t={t} large={i === 0} />)}</div>
    </div>
  );
}
