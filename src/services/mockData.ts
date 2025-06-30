// src/services/mockData.ts

// Mock data for development when backend is not available

import { Product } from './productApi';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro - Excellent Condition',
    description: 'iPhone 13 Pro in excellent condition. 256GB storage, Pacific Blue. Includes original box and charger. No scratches or damage.',
    price: 799.99,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
    ],
    sellerId: 'user123',
    status: 'AVAILABLE',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'MacBook Air M1 - Like New',
    description: 'MacBook Air with M1 chip, 8GB RAM, 256GB SSD. Purchased 6 months ago, barely used. Perfect for students or professionals.',
    price: 899.99,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop'
    ],
    sellerId: 'user456',
    status: 'AVAILABLE',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-14T14:20:00Z'
  },
  {
    id: '3',
    title: 'Nike Air Jordan 1 Retro High',
    description: 'Nike Air Jordan 1 Retro High OG in Chicago colorway. Size 10, worn only a few times. Original box included.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop'
    ],
    sellerId: 'user789',
    status: 'AVAILABLE',
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'Sony WH-1000XM4 Headphones',
    description: 'Sony WH-1000XM4 wireless noise-canceling headphones. Excellent sound quality, great battery life. Includes carrying case.',
    price: 249.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    ],
    sellerId: 'user101',
    status: 'SOLD',
    createdAt: '2024-01-12T16:45:00Z',
    updatedAt: '2024-01-12T16:45:00Z'
  },
  {
    id: '5',
    title: 'Canon EOS R6 Camera Body',
    description: 'Canon EOS R6 mirrorless camera body. Excellent condition, low shutter count. Perfect for photography enthusiasts.',
    price: 1899.99,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop'
    ],
    sellerId: 'user202',
    status: 'RESERVED',
    createdAt: '2024-01-11T11:30:00Z',
    updatedAt: '2024-01-11T11:30:00Z'
  },
  {
    id: '6',
    title: 'IKEA Desk and Chair Set',
    description: 'IKEA desk and ergonomic office chair set. Perfect for home office setup. Both items in great condition.',
    price: 199.99,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ],
    sellerId: 'user303',
    status: 'AVAILABLE',
    createdAt: '2024-01-10T13:20:00Z',
    updatedAt: '2024-01-10T13:20:00Z'
  }
];

// Mock API functions that return mock data
export const mockCreateProduct = async (data: any): Promise<Product> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const newProduct: Product = {
    id: Date.now().toString(),
    title: data.title,
    description: data.description,
    price: data.price,
    images: ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'],
    sellerId: 'current-user',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  return newProduct;
};

export const mockGetProducts = async (params?: any): Promise<{
  total: number;
  page: number;
  size: number;
  items: Product[];
}> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredProducts = [...mockProducts];
  
  // Apply filters if provided
  if (params?.keyword) {
    const keyword = params.keyword.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword)
    );
  }
  
  if (params?.status) {
    filteredProducts = filteredProducts.filter(product =>
      product.status === params.status
    );
  }
  
  if (params?.minPrice) {
    filteredProducts = filteredProducts.filter(product =>
      product.price >= params.minPrice
    );
  }
  
  if (params?.maxPrice) {
    filteredProducts = filteredProducts.filter(product =>
      product.price <= params.maxPrice
    );
  }
  
  return {
    total: filteredProducts.length,
    page: params?.page || 1,
    size: params?.size || 10,
    items: filteredProducts
  };
}; 