import { useEffect } from 'react';
import { site } from '../data/siteConfig';
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag); }
    tag.content = description || `${site.name}: ${site.tagline}`;
  }, [title, description]);
}
