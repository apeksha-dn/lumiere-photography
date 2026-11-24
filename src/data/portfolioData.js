export const categories = ['Weddings', 'Pre-Weddings', 'Portraits', 'Events', 'Fashion', 'Nature'];
// `src` is an Unsplash photo id or a full image URL (admin-added items use URLs).
const p = (src, category, caption, ratio) => ({ id: src, src, category, caption, ratio });
export const initialPortfolio = [
  p('1519741497674-611481863552', 'Weddings', 'Vows at golden hour', '3/4'),
  p('1511285560929-80b456fea0bc', 'Weddings', 'The first dance', '4/3'),
  p('1537633552985-df8429e8048b', 'Pre-Weddings', 'Together, before the day', '3/4'),
  p('1529634806980-85c3dd6d34ac', 'Pre-Weddings', 'A quiet walk', '4/3'),
  p('1494790108377-be9c29b29330', 'Portraits', 'Natural light portrait', '3/4'),
  p('1531746020798-e6953c6e8e04', 'Portraits', 'Studio study in shadow', '4/5'),
  p('1492684223066-81342ee5ff30', 'Events', 'Celebration after dark', '4/3'),
  p('1511578314322-379afb476865', 'Events', 'The room comes alive', '3/2'),
  p('1469334031218-e382a71b716b', 'Fashion', 'Editorial in motion', '3/4'),
  p('1515886657613-9f3515b0c78f', 'Fashion', 'Colour and composure', '4/5'),
  p('1470071459604-3b5ec3a7fe05', 'Nature', 'Morning above the valley', '3/2'),
  p('1441974231531-c6227db76b6e', 'Nature', 'Light through the forest', '3/4'),
];
