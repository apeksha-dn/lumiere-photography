import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { initialPortfolio } from '../data/portfolioData';
import { initialServices } from '../data/servicesData';

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;
export const isLive = Boolean(ENDPOINT);

function usePersisted(key, initial) {
  const [value, setValue] = useState(() => {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : initial; } catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ } }, [key, value]);
  return [value, setValue];
}

export function AppProvider({ children }) {
  const [portfolio, setPortfolio] = usePersisted('lumiere.portfolio', initialPortfolio);
  const [services, setServices] = usePersisted('lumiere.services', initialServices);
  const [enquiries, setEnquiries] = usePersisted('lumiere.enquiries', []);
  const [messages, setMessages] = usePersisted('lumiere.messages', []);

  // Resolves { live: true } only when the backend confirmed saving. Otherwise stores locally as demo; throws on backend failure.
  const submit = useCallback(async (kind, data) => {
    const record = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...data };
    if (isLive) {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kind, ...record }) });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      return { live: true };
    }
    (kind === 'booking' ? setEnquiries : setMessages)((list) => [record, ...list]);
    return { live: false };
  }, [setEnquiries, setMessages]);

  return (
    <Ctx.Provider value={{ portfolio, setPortfolio, services, setServices, enquiries, setEnquiries, messages, setMessages, submit }}>
      {children}
    </Ctx.Provider>
  );
}
