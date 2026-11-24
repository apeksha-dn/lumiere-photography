import EnquiryForm, { rules } from './EnquiryForm';

const fields = [
  { name: 'name', label: 'Your name', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true, validate: rules.email },
  { name: 'phone', label: 'Phone number', type: 'tel', validate: rules.phone },
  { name: 'message', label: 'Message', type: 'textarea', required: true, wide: true, validate: (v) => (v.trim().length >= 10 ? '' : 'Please write at least 10 characters.') },
];
export default function ContactForm() { return <EnquiryForm kind="contact" fields={fields} submitLabel="Send message" />; }
