import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { useApp } from '../context/AppContext';
import { categories } from '../data/portfolioData';
import { site } from '../data/siteConfig';

const AUTH_READY = import.meta.env.VITE_ADMIN_AUTH_CONFIGURED === 'true';
const when = (iso) => new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Admin() {
  usePageMeta('Admin (demo)');
  const { portfolio, setPortfolio, services, setServices, enquiries, messages } = useApp();
  const [entered, setEntered] = useState(false);
  const [tab, setTab] = useState('Overview');
  const [draft, setDraft] = useState({ src: '', caption: '', category: categories[0] });

  // Real authentication must be added here (Firebase Auth / Supabase Auth) before AUTH_READY is true.
  if (AUTH_READY) return <div className="container page"><p>Connect your authentication provider in <code>Admin.jsx</code>. No unauthenticated access is allowed once auth is enabled.</p></div>;
  if (!entered) {
    return (
      <div className="container page narrow">
        <h1>Admin dashboard (demo)</h1>
        <p className="notice warn">There is no login on this build. Anything here is stored in your browser only and is not secure. Do not deploy this page publicly until a real auth provider is connected.</p>
        <button className="btn" onClick={() => setEntered(true)}>Open demo dashboard</button>
      </div>
    );
  }
  const addItem = (e) => {
    e.preventDefault();
    if (!/^https?:\/\//.test(draft.src) || !draft.caption.trim()) return;
    setPortfolio([{ id: crypto.randomUUID(), ratio: '3/4', ...draft }, ...portfolio]);
    setDraft({ ...draft, src: '', caption: '' });
  };
  const editService = (id, patch) => setServices(services.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  const tabs = ['Overview', 'Portfolio', 'Services & pricing', 'Messages'];
  return (
    <div className="container page admin">
      <p className="notice warn">Demo only: data lives in this browser and nothing is secured.</p>
      <div className="filters">{tabs.map((t) => <button key={t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>)}</div>

      {tab === 'Overview' && (
        <>
          <div className="stats"><div><strong>{enquiries.length}</strong>Booking enquiries</div><div><strong>{messages.length}</strong>Messages</div><div><strong>{portfolio.length}</strong>Portfolio images</div></div>
          <h3>Recent enquiries</h3>
          {enquiries.length === 0 ? <p className="empty">No enquiries yet. Submit one from the booking page.</p> : (
            <div className="table-wrap"><table><thead><tr><th>Date</th><th>Name</th><th>Service</th><th>Event date</th><th>Contact</th></tr></thead>
              <tbody>{enquiries.slice(0, 8).map((e) => <tr key={e.id}><td>{when(e.createdAt)}</td><td>{e.name}</td><td>{e.service}</td><td>{e.date}</td><td>{e.email}<br />{e.phone}</td></tr>)}</tbody></table></div>
          )}
        </>
      )}

      {tab === 'Portfolio' && (
        <>
          <form className="form" onSubmit={addItem}>
            <label><span>Image URL (https)</span><input value={draft.src} onChange={(e) => setDraft({ ...draft, src: e.target.value })} placeholder="https://res.cloudinary.com/…" /></label>
            <label><span>Caption</span><input value={draft.caption} onChange={(e) => setDraft({ ...draft, caption: e.target.value })} /></label>
            <label><span>Category</span><select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })}>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
            <button className="btn">Add item</button>
          </form>
          <ul className="admin-list">{portfolio.map((p) => <li key={p.id}><span>{p.caption} <small>{p.category}</small></span><button aria-label={`Delete ${p.caption}`} onClick={() => setPortfolio(portfolio.filter((x) => x.id !== p.id))}><Trash2 size={16} /></button></li>)}</ul>
        </>
      )}

      {tab === 'Services & pricing' && (
        <div className="admin-services">{services.map((s) => (
          <div key={s.id} className="form">
            <label><span>Title</span><input value={s.title} onChange={(e) => editService(s.id, { title: e.target.value })} /></label>
            <label><span>Starting price ({site.currency})</span><input type="number" min="0" value={s.price} onChange={(e) => editService(s.id, { price: Number(e.target.value) })} /></label>
            <label className="wide"><span>Description</span><input value={s.description} onChange={(e) => editService(s.id, { description: e.target.value })} /></label>
          </div>
        ))}</div>
      )}

      {tab === 'Messages' && (messages.length === 0 ? <p className="empty">No contact messages yet.</p> : (
        <ul className="admin-list msgs">{messages.map((m) => <li key={m.id}><span><strong>{m.name}</strong> ({m.email}) <small>{when(m.createdAt)}</small><br />{m.message}</span></li>)}</ul>
      ))}
    </div>
  );
}
