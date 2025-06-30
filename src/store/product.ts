import { create } from 'zustand';
import { Product, CreateProductRequest, createProductApi, getProductsApi } from '../services/productApi';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  
  // Actions
  createProduct: (data: CreateProductRequest) => Promise<void>;
  fetchProducts: (params?: any) => Promise<void>;
  clearError: () => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  createProduct: async (data: CreateProductRequest) => {
    try {
      set({ loading: true, error: null });
      const newProduct = await createProductApi(data);
      set((state) => ({
        products: [newProduct, ...state.products],
        loading: false,
      }));
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || 'Failed to create product',
      });
      throw error;
    }
  },

  fetchProducts: async (params?: any) => {
    try {
      set({ loading: true, error: null });
      const response = await getProductsApi(params);
      set({
        products: response.items,
        loading: false,
      });
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || 'Failed to fetch products',
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },
})); 