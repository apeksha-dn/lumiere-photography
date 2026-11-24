import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Img from './Img';
import { site } from '../data/siteConfig';

export default function ServiceCard({ service, flip }) {
  return (
    <article className={`service ${flip ? 'flip' : ''}`} id={service.id}>
      <Img src={service.image} w={1000} ratio="4/3" alt={`${service.title} sample`} />
      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul className="ticks">{service.includes.map((i) => <li key={i}><Check size={16} />{i}</li>)}</ul>
        <p className="meta">{service.duration}. {service.delivery}.</p>
        <p className="price">From {site.currency}{Number(service.price).toLocaleString('en-IN')} <small>demo price</small></p>
        <Link className="btn" to={`/booking?service=${encodeURIComponent(service.title)}`}>Enquire now</Link>
      </div>
    </article>
  );
}
