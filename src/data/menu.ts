export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Waakye' | 'Jollof' | 'Fried Rice' | 'Sides' | 'Drinks';
  popular?: boolean;
  image?: string;
}

export const menuCategories = ['All', 'Waakye', 'Jollof', 'Fried Rice', 'Sides', 'Drinks'];

export const menuData: MenuItem[] = [
  {
    id: 'w1',
    name: 'The Godfather Waakye (Jumbo)',
    description: 'Our signature mountain of waakye with wele, egg, fish, beef, macro, gari, and our secret thick shito.',
    price: 60,
    category: 'Waakye',
    popular: true,
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'w2',
    name: 'Classic Waakye Bowl',
    description: 'Perfect for lunch. Waakye, egg, choice of meat or fish, gari, spaghetti, and shito.',
    price: 35,
    category: 'Waakye',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'j1',
    name: 'Weekend Party Jollof',
    description: 'Smoky, spicy Ghanaian jollof served with juicy grilled chicken thigh and coleslaw.',
    price: 45,
    category: 'Jollof',
    popular: true,
    image: 'https://images.unsplash.com/photo-1672304918719-72f10738eeb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'j2',
    name: 'Beef Asun Jollof',
    description: 'Spicy jollof paired with tender, peppered beef chunks (Asun style).',
    price: 50,
    category: 'Jollof',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'f1',
    name: 'Assorted Fried Rice',
    description: 'Loaded with beef, chicken, sausages, and veggies. A heavy meal!',
    price: 55,
    category: 'Fried Rice',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'f2',
    name: 'Simple Chicken Fried Rice',
    description: 'Ghanaian style fried rice with a massive fried chicken piece and green chili sauce.',
    price: 40,
    category: 'Fried Rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 's1',
    name: 'Extra Wele (Cowhide)',
    description: 'Soft, well-seasoned wele cooked in stew.',
    price: 10,
    category: 'Sides',
  },
  {
    id: 's2',
    name: 'Kelewele Portion',
    description: 'Spicy fried ripe plantains.',
    price: 15,
    category: 'Sides',
  },
  {
    id: 's3',
    name: 'Fried Guinea Fowl (Akomfem)',
    description: 'Crispy fried akomfem, seasoned to the bone.',
    price: 30,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1625937759404-1b033cf8e4bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'd1',
    name: 'Fresh Sobolo (Chilled)',
    description: 'Bite-sized ginger kick, perfect with waakye. 500ml.',
    price: 10,
    category: 'Drinks',
  },
  {
    id: 'd2',
    name: 'Pineapple Ginger Juice',
    description: '100% natural, no added sugar.',
    price: 15,
    category: 'Drinks',
  }
];
