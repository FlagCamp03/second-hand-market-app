// src/services/productApi.ts

// This file contains API functions for product management, including creating products and uploading images

import api from '../utils/api';

// Interface for product creation request
export interface CreateProductRequest {
  title: string;
  description: string;
  price: number;
  images: File[];
}

// Interface for product response
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  sellerId: string;
  status: 'AVAILABLE' | 'RESERVED' | 'SOLD';
  createdAt: string;
  updatedAt: string;
}

// Create product API call
export const createProductApi = async (data: CreateProductRequest): Promise<Product> => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('price', data.price.toString());
  
  // Append each image file
  data.images.forEach((image, index) => {
    formData.append(`images`, image);
  });

  const response = await api.post("/products", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
};

// Get product by ID
export const getProductApi = (id: string): Promise<Product> => {
  return api.get(`/products/${id}`).then((res) => res.data);
};

// Get products list with filters
export const getProductsApi = (params?: {
  keyword?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
  page?: number;
  size?: number;
}): Promise<{
  total: number;
  page: number;
  size: number;
  items: Product[];
}> => {
  return api.get("/products", { params }).then((res) => res.data);
}; 