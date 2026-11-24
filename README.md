# Lumière Studio: photography website

React + Vite + React Router + Framer Motion + Lucide.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview
```

## Edit the business
- `src/data/siteConfig.js`: name, email, phone, WhatsApp number, address, social links, map embed, currency
- `src/data/portfolioData.js`, `servicesData.js`, `testimonialsData.js`: content (prices and reviews are demo)
- `src/data/images.js`: image helper. Pass full URLs or Unsplash ids; swap `u()` for Cloudinary URLs.

## Backend (not configured by default)
Without `VITE_ENQUIRY_ENDPOINT` the forms run in **demo mode**: data is kept in this browser only and the UI says so.
Copy `.env.example` to `.env` and set the endpoint (Firebase function, Supabase edge function, any REST URL accepting JSON POST).
A success message is only shown on a 2xx response.

## Admin (`/admin`)
Demo only, with no login and no security. Before going live, add real auth (Firebase Auth or Supabase Auth) in `Admin.jsx`, move storage to your database, and set `VITE_ADMIN_AUTH_CONFIGURED=true`.
