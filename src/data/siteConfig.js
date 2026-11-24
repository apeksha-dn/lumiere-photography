// Edit everything about the business here.
export const site = {
  name: 'Lumière Studio',
  tagline: 'Capturing Moments. Creating Memories.',
  email: 'hello@lumierestudio.example',
  phone: '+91 98765 43210',
  whatsapp: '919876543210', // digits only, with country code
  address: '12 Gallery Lane, Your City, State 000000',
  instagram: 'https://instagram.com/your-studio',
  facebook: 'https://facebook.com/your-studio',
  hours: 'Mon–Sat, 10:00–18:00. Shoots by appointment, including weekends.',
  mapEmbed: '', // paste a Google Maps embed URL here
  currency: '₹',
};
export const waLink = (text = 'Hello, I would like to enquire about a photography session.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
