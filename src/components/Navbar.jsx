import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../data/siteConfig';

const links = [['/', 'Home'], ['/portfolio', 'Portfolio'], ['/about', 'About'], ['/services', 'Services'], ['/testimonials', 'Kind words'], ['/contact', 'Contact']];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === '/' && !scrolled && !open;
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className={`nav ${overHero ? 'nav-clear' : 'nav-solid'}`}>
      <div className="nav-inner">
        <Link to="/" className="logo">{site.name}</Link>
        <nav className="nav-links" aria-label="Main">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>)}
        </nav>
        <Link to="/booking" className="btn btn-small nav-cta">Book a session</Link>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-menu" aria-label="Mobile" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }}>
            {[...links, ['/booking', 'Book a session']].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
