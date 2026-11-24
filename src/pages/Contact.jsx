import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import SectionHeading from '../components/SectionHeading';
import usePageMeta from '../hooks/usePageMeta';
import { site } from '../data/siteConfig';

export default function Contact() {
  usePageMeta('Contact', 'Contact the studio by email, phone, WhatsApp or the enquiry form.');
  return (
    <div className="container page">
      <SectionHeading title="Contact" text="We usually reply within one working day." />
      <div className="contact-grid">
        <div className="contact-info">
          <a href={`mailto:${site.email}`}><Mail size={18} />{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={18} />{site.phone}</a>
          <span><MapPin size={18} />{site.address}</span>
          <span><Clock size={18} />{site.hours}</span>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} />Instagram</a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18} />Facebook</a>
          <WhatsAppButton />
        </div>
        <ContactForm />
      </div>
      <div className="map">
        {site.mapEmbed ? <iframe title="Studio location" src={site.mapEmbed} loading="lazy" /> : <p>Map placeholder. Paste a Google Maps embed URL into <code>mapEmbed</code> in <code>siteConfig.js</code>.</p>}
      </div>
    </div>
  );
}
