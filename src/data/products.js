export const categories = [
  { id: 'tees', name: 'Racing Tees', active: true },
  { id: 'jackets', name: 'Speed Jackets', active: false },
  { id: 'caps', name: 'Track Caps', active: false },
  { id: 'accessories', name: 'Pit Accessories', active: false },
  { id: 'limited', name: 'Limited Edition', active: false },
];

export const products = [
  {
    id: '1',
    name: 'Monaco GP Racing Tee',
    price: 85,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tees',
    description: 'Premium cotton racing tee inspired by the Monaco Grand Prix circuit.'
  },
  {
    id: '2',
    name: 'Silverstone Performance Tee',
    price: 79,
    image: 'https://images.pexels.com/photos/8532611/pexels-photo-8532611.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tees',
    description: 'Moisture-wicking performance tee with Silverstone circuit graphics.'
  },
  {
    id: '3',
    name: 'Podium Victory Tee',
    price: 95,
    image: 'https://images.pexels.com/photos/8532594/pexels-photo-8532594.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tees',
    description: 'Championship celebration tee with gold foil detailing.'
  },
  {
    id: '4',
    name: 'Grid Position Tee',
    price: 72,
    image: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tees',
    description: 'Classic racing tee featuring starting grid position numbers.'
  },
  {
    id: '5',
    name: 'Pit Crew Essential Tee',
    price: 68,
    image: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tees',
    description: 'Durable pit crew style tee built for racing enthusiasts.'
  },
  {
    id: '6',
    name: 'Speed Demon Tee',
    price: 89,
    image: 'https://images.pexels.com/photos/8532595/pexels-photo-8532595.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tees',
    description: 'Bold graphic tee celebrating the thrill of high-speed racing.'
  },
];

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const searchProducts = (query, products) => {
  if (!query.trim()) return products;
  
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};