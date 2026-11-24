import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { site } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">{site.name}</div>
          <p className="muted-light">{site.tagline}</p>
          <div className="social">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
        <div><h4>Explore</h4>{[['/portfolio', 'Portfolio'], ['/about', 'About'], ['/testimonials', 'Kind words'], ['/booking', 'Book a session']].map(([t, l]) => <Link key={t} to={t}>{l}</Link>)}</div>
        <div><h4>Services</h4>{['Weddings', 'Pre-weddings', 'Portraits', 'Events', 'Fashion', 'Products'].map((s) => <Link key={s} to="/services">{s}</Link>)}</div>
        <div><h4>Contact</h4>
          <a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={15} /> {site.phone}</a>
          <span>{site.address}</span>
        </div>
      </div>
      <div className="container footer-base">© {new Date().getFullYear()} {site.name}. All rights reserved. <Link to="/admin">Admin</Link></div>
    </footer>
  );
}
