import { Link } from 'react-router-dom';
import { Camera, Clock, Heart, Palette } from 'lucide-react';
import Hero from '../components/Hero';
import Img from '../components/Img';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import usePageMeta from '../hooks/usePageMeta';
import { initialPortfolio, categories } from '../data/portfolioData';
import { testimonials } from '../data/testimonialsData';
import { IMG } from '../data/images';
import { site } from '../data/siteConfig';

const why = [
  [Heart, 'Story first', 'We photograph what happened, not a script of poses.'],
  [Palette, 'Timeless edits', 'Natural colour and light that will not date.'],
  [Clock, 'On-time delivery', 'Delivery dates are agreed in writing before the shoot.'],
  [Camera, 'Backup everything', 'Two cards per camera and a second copy of every file.'],
];

export default function Home() {
  usePageMeta('Wedding & Portrait Photography', 'Lumière Studio: wedding, pre-wedding, portrait, event and fashion photography.');
  const featured = initialPortfolio.filter((_, i) => [0, 4, 8, 10].includes(i));
  const insta = initialPortfolio.slice(2, 8);
  return (
    <>
      <Hero />
      <section className="container intro">
        <h2>A small studio that stays out of the way.</h2>
        <p>{site.name} photographs weddings, families and brands across the region. We work quietly, plan carefully, and deliver images you will still want to look at in twenty years.</p>
      </section>

      <section className="container section">
        <SectionHeading title="Selected work" text="A few frames from recent seasons." />
        <div className="featured-grid">
          {featured.map((f, i) => (
            <Link key={f.id} to="/portfolio" className={`feat f${i}`}><Img src={f.src} w={1000} alt={f.caption} /><span>{f.caption}</span></Link>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="container">
          <SectionHeading title="What we photograph" />
          <div className="cat-list">{categories.map((c) => <Link key={c} to="/portfolio" state={{ category: c }}>{c}</Link>)}</div>
        </div>
      </section>

      <section className="container section split">
        <Img src={IMG.about} w={900} ratio="4/5" alt="Portrait of the lead photographer" />
        <div>
          <h2>Hello, I’m Aarav.</h2>
          <p>I picked up a camera at sixteen and never really put it down. Twelve years on, I still prefer one honest frame to fifty clever ones.</p>
          <Link to="/about" className="btn btn-outline">Read my story</Link>
        </div>
      </section>

      <section className="container section">
        <SectionHeading title="Why couples and brands choose us" />
        <div className="why">{why.map(([Icon, t, d]) => <div key={t}><Icon size={26} /><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section className="band">
        <div className="container">
          <SectionHeading title="Kind words" text="Demo reviews. Replace with your own." />
          <div className="quotes">{testimonials.slice(0, 3).map((t) => <TestimonialCard key={t.id} t={t} />)}</div>
        </div>
      </section>

      <section className="container section insta">
        <SectionHeading title="Follow along" text="Recent frames from our Instagram." />
        <div className="insta-grid">{insta.map((i) => <a key={i.id} href={site.instagram} target="_blank" rel="noopener noreferrer"><Img src={i.src} w={500} ratio="1/1" alt={i.caption} /></a>)}</div>
      </section>

      <section className="cta">
        <h2>Tell us about your day.</h2>
        <p>Share your date and ideas, and we will reply within one working day.</p>
        <Link to="/booking" className="btn">Book a session</Link>
      </section>
    </>
  );
}
