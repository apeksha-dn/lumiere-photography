import { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useApp, isLive } from '../context/AppContext';
import LoadingSpinner from './LoadingSpinner';

// Shared form engine: fields = [{ name, label, type, required, options, validate }]
export default function EnquiryForm({ kind, fields, initial = {}, submitLabel }) {
  const { submit } = useApp();
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, initial[f.name] || ''])));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle' });

  const check = (f, v) => {
    if (f.required && !String(v).trim()) return `${f.label} is required.`;
    return v && f.validate ? f.validate(v) : '';
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    fields.forEach((f) => { const msg = check(f, values[f.name]); if (msg) next[f.name] = msg; });
    setErrors(next);
    if (Object.keys(next).length) return setStatus({ state: 'idle' });
    setStatus({ state: 'loading' });
    try {
      const { live } = await submit(kind, values);
      setStatus({ state: 'done', live });
      setValues(Object.fromEntries(fields.map((f) => [f.name, ''])));
    } catch (err) {
      setStatus({ state: 'error', message: err.message });
    }
  };

  if (status.state === 'done') {
    return (
      <div className="notice ok" role="status">
        <CheckCircle2 />
        <div>
          <h3>{status.live ? 'Thank you, your enquiry has been sent.' : 'Demo submission saved on this device only.'}</h3>
          <p>{status.live ? 'We will reply within one working day.' : 'This site has no backend connected yet, so nothing was sent and this is not a live booking. Use WhatsApp to reach the studio now.'}</p>
          <button className="btn btn-outline" onClick={() => setStatus({ state: 'idle' })}>Send another</button>
        </div>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {!isLive && <p className="notice warn"><AlertCircle size={18} /> Demo mode: submissions are stored in this browser only.</p>}
      {fields.map((f) => (
        <label key={f.name} className={f.wide ? 'wide' : ''}>
          <span>{f.label}{f.required && ' *'}</span>
          {f.type === 'select' ? (
            <select value={values[f.name]} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} aria-invalid={!!errors[f.name]}>
              <option value="">Select…</option>{f.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : f.type === 'textarea' ? (
            <textarea rows={5} value={values[f.name]} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} aria-invalid={!!errors[f.name]} />
          ) : (
            <input type={f.type || 'text'} value={values[f.name]} min={f.min} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} aria-invalid={!!errors[f.name]} />
          )}
          {errors[f.name] && <em className="err">{errors[f.name]}</em>}
        </label>
      ))}
      {status.state === 'error' && <p className="notice bad wide" role="alert"><AlertCircle size={18} /> We could not send your enquiry ({status.message}). Please try again or use WhatsApp.</p>}
      <button className="btn wide" disabled={status.state === 'loading'}>{status.state === 'loading' ? <LoadingSpinner label="Sending" /> : submitLabel}</button>
    </form>
  );
}

export const rules = {
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Enter a valid email address.'),
  phone: (v) => (/^\+?[\d\s-]{10,15}$/.test(v) && v.replace(/\D/g, '').length >= 10 ? '' : 'Enter a valid phone number (10 to 15 digits).'),
  futureDate: (v) => (new Date(v) >= new Date(new Date().toDateString()) ? '' : 'Choose today or a future date.'),
};
