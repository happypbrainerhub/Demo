import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 134900,
    originalPrice: 159900,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
    category: 'Electronics',
    rating: 5
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 124999,
    originalPrice: 139999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    description: 'Premium Android smartphone with S Pen, 200MP camera, and AI features.',
    category: 'Electronics',
    rating: 5
  },
  {
    id: '3',
    name: 'MacBook Air M3',
    price: 114900,
    originalPrice: 134900,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    description: 'Ultra-thin laptop with M3 chip, 18-hour battery life, and stunning Retina display.',
    category: 'Electronics',
    rating: 5
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    price: 29990,
    originalPrice: 34990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    description: 'Industry-leading noise canceling wireless headphones with 30-hour battery.',
    category: 'Electronics',
    rating: 4
  },
  {
    id: '5',
    name: 'iPad Pro 12.9"',
    price: 112900,
    originalPrice: 127900,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    description: 'Professional tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.',
    category: 'Electronics',
    rating: 5
  },
  {
    id: '6',
    name: 'Dell XPS 13',
    price: 89999,
    originalPrice: 99999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    description: 'Premium ultrabook with Intel Core i7, 16GB RAM, and InfinityEdge display.',
    category: 'Electronics',
    rating: 4
  },

  // Fashion
  {
    id: '7',
    name: 'Nike Air Jordan 1 Retro',
    price: 12995,
    originalPrice: 14995,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    description: 'Classic basketball sneakers with premium leather and iconic design.',
    category: 'Fashion',
    rating: 5
  },
  {
    id: '8',
    name: 'Levi\'s 501 Original Jeans',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop',
    description: 'Classic straight-fit jeans made from premium denim with authentic details.',
    category: 'Fashion',
    rating: 4
  },
  {
    id: '9',
    name: 'Adidas Ultraboost 22',
    price: 16999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    description: 'High-performance running shoes with Boost midsole and Primeknit upper.',
    category: 'Fashion',
    rating: 5
  },
  {
    id: '10',
    name: 'Ray-Ban Aviator Sunglasses',
    price: 8999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    description: 'Iconic aviator sunglasses with polarized lenses and metal frame.',
    category: 'Fashion',
    rating: 4
  },

  // Home & Kitchen
  {
    id: '11',
    name: 'Instant Pot Duo 7-in-1',
    price: 8999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Multi-functional pressure cooker that replaces 7 kitchen appliances.',
    category: 'Home',
    rating: 5
  },
  {
    id: '12',
    name: 'Dyson V15 Detect Vacuum',
    price: 54900,
    originalPrice: 64900,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Cordless vacuum with laser dust detection and powerful suction.',
    category: 'Home',
    rating: 5
  },
  {
    id: '13',
    name: 'KitchenAid Stand Mixer',
    price: 34999,
    originalPrice: 39999,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Professional-grade stand mixer with 10 speeds and multiple attachments.',
    category: 'Home',
    rating: 5
  },

  // Books
  {
    id: '14',
    name: 'The Psychology of Money',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop',
    description: 'Timeless lessons on wealth, greed, and happiness by Morgan Housel.',
    category: 'Books',
    rating: 5
  },
  {
    id: '15',
    name: 'Atomic Habits',
    price: 449,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    description: 'An easy and proven way to build good habits and break bad ones.',
    category: 'Books',
    rating: 5
  },

  // Sports
  {
    id: '16',
    name: 'Yoga Mat Premium',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    description: 'Non-slip yoga mat with extra cushioning and eco-friendly materials.',
    category: 'Sports',
    rating: 4
  },
  {
    id: '17',
    name: 'Dumbbells Set 20kg',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    description: 'Adjustable dumbbell set with rubber coating and secure locking mechanism.',
    category: 'Sports',
    rating: 4
  },

  // Beauty
  {
    id: '18',
    name: 'Lakme Absolute Lipstick',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop',
    description: 'Long-lasting matte lipstick with intense color and comfortable wear.',
    category: 'Beauty',
    rating: 4
  },
  {
    id: '19',
    name: 'The Ordinary Niacinamide Serum',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop',
    description: 'High-strength vitamin and zinc serum for blemish-prone skin.',
    category: 'Beauty',
    rating: 5
  },
  {
    id: '20',
    name: 'Philips Hair Dryer',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&fit=crop',
    description: 'Professional hair dryer with ionic technology and multiple heat settings.',
    category: 'Beauty',
    rating: 4
  }
];

