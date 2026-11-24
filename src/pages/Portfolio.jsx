import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PortfolioFilter from '../components/PortfolioFilter';
import ImageGallery from '../components/ImageGallery';
import SectionHeading from '../components/SectionHeading';
import usePageMeta from '../hooks/usePageMeta';
import { useApp } from '../context/AppContext';

export default function Portfolio() {
  usePageMeta('Portfolio', 'Browse weddings, pre-weddings, portraits, events, fashion and nature photography.');
  const { portfolio } = useApp();
  const { state } = useLocation();
  const [cat, setCat] = useState(state?.category || 'All');
  const items = cat === 'All' ? portfolio : portfolio.filter((p) => p.category === cat);
  return (
    <div className="container page">
      <SectionHeading title="Portfolio" text="Select a category, then open any photograph to view it full screen." />
      <PortfolioFilter active={cat} onChange={setCat} />
      <ImageGallery key={cat} items={items} />
    </div>
  );
}
