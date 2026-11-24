import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));

const Page = ({ children }) => (
  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>{children}</motion.main>
);

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="page-loading"><LoadingSpinner /></div>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/portfolio" element={<Page><Portfolio /></Page>} />
            <Route path="/about" element={<Page><About /></Page>} />
            <Route path="/services" element={<Page><Services /></Page>} />
            <Route path="/testimonials" element={<Page><Testimonials /></Page>} />
            <Route path="/booking" element={<Page><Booking /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="/admin" element={<Page><Admin /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <WhatsAppButton floating />
    </>
  );
}
