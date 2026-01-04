import apiClient from './api';
import { Order, Address } from '@types/index';

export const orderService = {
  create: async (items: any[], shippingAddress: Address) => {
    const response = await apiClient.post('/orders', {
      items,
      shippingAddress,
    });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get<Order>(`/orders/${id}`);
    return response.data;
  },

  getMyOrders: async (page = 1, limit = 10) => {
    const response = await apiClient.get('/orders/my-orders', {
      params: { page, limit },
    });
    return response.data;
  },

  updateStatus: async (id: string, status: string) => {
    const response = await apiClient.patch(`/orders/${id}`, { status });
    return response.data;
  },

  cancel: async (id: string) => {
    const response = await apiClient.post(`/orders/${id}/cancel`);
    return response.data;
  },
};

export default orderService;
