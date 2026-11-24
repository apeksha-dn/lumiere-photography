import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img from './Img';
import { IMG } from '../data/images';
import { site } from '../data/siteConfig';

export default function Hero() {
  return (
    <section className="hero">
      <Img src={IMG.hero} w={2000} alt="A couple sharing a quiet moment at their wedding" className="hero-img" eager />
      <div className="hero-shade" />
      <motion.div className="hero-copy container" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
        <h1>{site.tagline}</h1>
        <p>An independent studio photographing weddings, portraits and stories with patience and natural light.</p>
        <div className="hero-actions">
          <Link to="/portfolio" className="btn">Explore portfolio</Link>
          <Link to="/booking" className="btn btn-ghost">Book a session</Link>
        </div>
      </motion.div>
    </section>
  );
}
