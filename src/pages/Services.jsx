import ServiceCard from '../components/ServiceCard';
import PricingCard from '../components/PricingCard';
import SectionHeading from '../components/SectionHeading';
import usePageMeta from '../hooks/usePageMeta';
import { useApp } from '../context/AppContext';
import { packages } from '../data/servicesData';

export default function Services() {
  usePageMeta('Services & Pricing', 'Photography services and starting prices for weddings, portraits, events, fashion and products.');
  const { services } = useApp();
  return (
    <div className="container page">
      <SectionHeading title="Services & pricing" text="All prices are demo figures for illustration and can be edited." />
      <div className="services">{services.map((s, i) => <ServiceCard key={s.id} service={s} flip={i % 2} />)}</div>
      <section className="section">
        <SectionHeading title="Wedding packages" text="Pick a starting point. Every package can be adjusted." />
        <div className="packages">{packages.map((p) => <PricingCard key={p.name} pkg={p} />)}</div>
      </section>
    </div>
  );
}
