import { MenuItem } from '@/contexts/CartContext';

export const menuItems: MenuItem[] = [
  // Cakes
  {
    id: '1',
    name: 'Chocolate Cake',
    category: 'Cakes',
    price: 450,
    description: 'Rich chocolate layers with decadent frosting',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
  },
  {
    id: '2',
    name: 'Black Forest Cake',
    category: 'Cakes',
    price: 550,
    description: 'Classic chocolate cake with cherries and cream',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80'
  },
  {
    id: '3',
    name: 'Vanilla Cake',
    category: 'Cakes',
    price: 400,
    description: 'Light and fluffy vanilla sponge',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80'
  },
  {
    id: '4',
    name: 'Pineapple Cake',
    category: 'Cakes',
    price: 420,
    description: 'Tropical pineapple flavored sponge cake',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80'
  },
  {
    id: '5',
    name: 'Strawberry Cake',
    category: 'Cakes',
    price: 500,
    description: 'Fresh strawberry cream cake',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80'
  },
  {
    id: '6',
    name: 'Butterscotch Cake',
    category: 'Cakes',
    price: 480,
    description: 'Caramel butterscotch flavored delight',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=500&q=80'
  },
  {
    id: '7',
    name: 'Red Velvet Cake',
    category: 'Cakes',
    price: 550,
    description: 'Smooth cream cheese frosting on red velvet',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=500&q=80'
  },
  {
    id: '8',
    name: 'Fruit Cake',
    category: 'Cakes',
    price: 520,
    description: 'Mixed fruit cake with seasonal fruits',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&q=80'
  },

  // Pastries
  {
    id: '9',
    name: 'Chocolate Pastry',
    category: 'Pastries',
    price: 90,
    description: 'Single serve chocolate pastry',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4cdb0e0f?w=500&q=80'
  },
  {
    id: '10',
    name: 'Black Forest Pastry',
    category: 'Pastries',
    price: 100,
    description: 'Individual black forest slice',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80'
  },
  {
    id: '11',
    name: 'Strawberry Pastry',
    category: 'Pastries',
    price: 95,
    description: 'Fresh strawberry cream pastry',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80'
  },
  {
    id: '12',
    name: 'Pineapple Pastry',
    category: 'Pastries',
    price: 90,
    description: 'Tropical pineapple pastry slice',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&q=80'
  },
  {
    id: '13',
    name: 'Butterscotch Pastry',
    category: 'Pastries',
    price: 95,
    description: 'Caramel butterscotch pastry',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d49a7e?w=500&q=80'
  },
  {
    id: '14',
    name: 'Red Velvet Pastry',
    category: 'Pastries',
    price: 110,
    description: 'Red velvet cake pastry slice',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80'
  },
  {
    id: '15',
    name: 'Cold Chocolate Pastry',
    category: 'Pastries',
    price: 120,
    description: 'Chilled chocolate mousse pastry',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80'
  },
  {
    id: '16',
    name: 'Mango Mousse Pastry',
    category: 'Pastries',
    price: 115,
    description: 'Light mango mousse pastry',
    image: 'https://images.unsplash.com/photo-1519915212116-715e4e9460b4?w=500&q=80'
  },
  {
    id: '17',
    name: 'Blueberry Cheesecake Pastry',
    category: 'Pastries',
    price: 130,
    description: 'Creamy blueberry cheesecake slice',
    image: 'https://images.unsplash.com/photo-1533134242820-b4f6a146e46a?w=500&q=80'
  },
  {
    id: '18',
    name: 'Fruit Pastry',
    category: 'Pastries',
    price: 100,
    description: 'Mixed seasonal fruit pastry',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80'
  },

  // Puffs
  {
    id: '19',
    name: 'Veg Puff',
    category: 'Puffs',
    price: 30,
    description: 'Crispy puff with vegetable filling',
    image: 'https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?w=500&q=80'
  },
  {
    id: '20',
    name: 'Paneer Puff',
    category: 'Puffs',
    price: 35,
    description: 'Flaky puff with spiced paneer',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80'
  },
  {
    id: '21',
    name: 'Egg Puff',
    category: 'Puffs',
    price: 40,
    description: 'Golden puff with egg filling',
    image: 'https://images.unsplash.com/photo-1612201152994-a16d7dfa0e93?w=500&q=80'
  },

  // Breads
  {
    id: '22',
    name: 'White Bread',
    category: 'Breads',
    price: 50,
    description: 'Fresh white bread loaf',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80'
  },
  {
    id: '23',
    name: 'Brown Bread',
    category: 'Breads',
    price: 60,
    description: 'Healthy whole wheat brown bread',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&q=80'
  },
  {
    id: '24',
    name: 'Sweet Bun',
    category: 'Breads',
    price: 25,
    description: 'Soft sweet bun',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80'
  },
  {
    id: '25',
    name: 'Pav Bun (6 pcs)',
    category: 'Breads',
    price: 30,
    description: 'Pack of 6 soft pav buns',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&q=80'
  },

  // Cookies
  {
    id: '26',
    name: 'Butter Cookies',
    category: 'Cookies',
    price: 200,
    description: 'Traditional butter cookies (500g)',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80'
  },
  {
    id: '27',
    name: 'Chocolate Chip Cookies',
    category: 'Cookies',
    price: 220,
    description: 'Classic chocolate chip cookies (500g)',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80'
  },
  {
    id: '28',
    name: 'Oatmeal Cookies',
    category: 'Cookies',
    price: 230,
    description: 'Healthy oatmeal cookies (500g)',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&q=80'
  },
  {
    id: '29',
    name: 'Cashew Cookies',
    category: 'Cookies',
    price: 250,
    description: 'Premium cashew cookies (500g)',
    image: 'https://images.unsplash.com/photo-1486893732792-ab0085cb2d43?w=500&q=80'
  },
  {
    id: '30',
    name: 'Coconut Cookies',
    category: 'Cookies',
    price: 240,
    description: 'Crispy coconut cookies (500g)',
    image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=500&q=80'
  }
];

export const categories = ['All', 'Breads', 'Cakes', 'Pastries', 'Puffs', 'Cookies'];
