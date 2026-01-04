import apiClient from './api';
import { Product, PaginatedResponse } from '@types/index';

export const productService = {
  getAll: async (page = 1, limit = 12, category?: string) => {
    const response = await apiClient.get<PaginatedResponse<Product>>('/products', {
      params: { page, limit, category },
    });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  },

  getFeatured: async () => {
    const response = await apiClient.get<Product[]>('/products/featured');
    return response.data;
  },

  search: async (query: string) => {
    const response = await apiClient.get<Product[]>('/products/search', {
      params: { q: query },
    });
    return response.data;
  },

  getByCategory: async (category: string, page = 1, limit = 12) => {
    const response = await apiClient.get<PaginatedResponse<Product>>(
      `/products/category/${category}`,
      { params: { page, limit } }
    );
    return response.data;
  },

  getRandomProducts: async (count = 1) => {
    const response = await apiClient.get<Product[]>('/products/random', {
      params: { count },
    });
    return response.data;
  },
};

export default productService;
