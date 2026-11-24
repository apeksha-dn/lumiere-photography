// All remote photos live here. Replace with client files or Cloudinary URLs.
// Cloudinary-ready: change `u()` to build https://res.cloudinary.com/<cloud>/image/upload/w_<w>,q_auto,f_auto/<id>
export const u = (id, w = 1200) =>
  id.startsWith('http') || id.startsWith('data:') ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
export const IMG = {
  hero: '1519741497674-611481863552',
  about: '1494790108377-be9c29b29330',
  behind: '1452587925148-ce544e77e70d',
};
