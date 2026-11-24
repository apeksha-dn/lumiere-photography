import { MessageCircle } from 'lucide-react';
import { waLink } from '../data/siteConfig';
export default function WhatsAppButton({ floating = false, text, children }) {
  return (
    <a className={floating ? 'wa-float' : 'btn btn-outline'} href={waLink(text)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={floating ? 26 : 18} />{!floating && (children || 'WhatsApp us')}
    </a>
  );
}
