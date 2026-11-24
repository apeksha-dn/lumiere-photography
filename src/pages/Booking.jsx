import BookingForm from '../components/BookingForm';
import WhatsAppButton from '../components/WhatsAppButton';
import SectionHeading from '../components/SectionHeading';
import usePageMeta from '../hooks/usePageMeta';

export default function Booking() {
  usePageMeta('Book a Session', 'Send a booking enquiry for your wedding, portrait, event or fashion shoot.');
  return (
    <div className="container page narrow">
      <SectionHeading title="Book a session" text="Share a few details. This is an enquiry, not a confirmed booking: we reply to confirm availability." />
      <BookingForm />
      <p className="or">Prefer to chat?</p>
      <WhatsAppButton text="Hello, I would like to book a photography session." />
    </div>
  );
}
