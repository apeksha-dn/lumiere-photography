import { useSearchParams } from 'react-router-dom';
import EnquiryForm, { rules } from './EnquiryForm';
import { useApp } from '../context/AppContext';

export default function BookingForm() {
  const { services } = useApp();
  const [params] = useSearchParams();
  const fields = [
    { name: 'name', label: 'Full name', required: true },
    { name: 'email', label: 'Email address', type: 'email', required: true, validate: rules.email },
    { name: 'phone', label: 'Phone number', type: 'tel', required: true, validate: rules.phone },
    { name: 'service', label: 'Photography service', type: 'select', required: true, options: services.map((s) => s.title) },
    { name: 'date', label: 'Event date', type: 'date', required: true, validate: rules.futureDate, min: new Date().toISOString().slice(0, 10) },
    { name: 'location', label: 'Event location', required: true },
    { name: 'budget', label: 'Estimated budget', type: 'select', options: ['Under 25,000', '25,000 to 60,000', '60,000 to 1,20,000', 'Above 1,20,000'] },
    { name: 'message', label: 'Additional message', type: 'textarea', wide: true },
  ];
  return <EnquiryForm kind="booking" fields={fields} initial={{ service: params.get('service') || '' }} submitLabel="Send enquiry" />;
}
