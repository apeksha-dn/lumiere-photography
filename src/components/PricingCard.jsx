import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { site } from '../data/siteConfig';

export default function PricingCard({ pkg }) {
  return (
    <div className={`pricing ${pkg.featured ? 'featured' : ''}`}>
      <p className="meta">{pkg.note}</p>
      <h3>{pkg.name}</h3>
      <p className="price">{site.currency}{pkg.price.toLocaleString('en-IN')}</p>
      <ul className="ticks">{pkg.features.map((f) => <li key={f}><Check size={16} />{f}</li>)}</ul>
      <Link to={`/booking?service=Wedding%20Photography`} className={`btn ${pkg.featured ? '' : 'btn-outline'}`}>Choose {pkg.name}</Link>
    </div>
  );
}
