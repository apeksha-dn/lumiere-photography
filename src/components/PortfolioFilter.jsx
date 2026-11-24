import { categories } from '../data/portfolioData';
export default function PortfolioFilter({ active, onChange }) {
  return (
    <div className="filters" role="tablist" aria-label="Portfolio categories">
      {['All', ...categories].map((c) => (
        <button key={c} role="tab" aria-selected={active === c} className={active === c ? 'on' : ''} onClick={() => onChange(c)}>{c}</button>
      ))}
    </div>
  );
}
