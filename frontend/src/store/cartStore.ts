import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@types/index';

interface CartStore {
  items: CartItem[];
  totalPrice: number;
  addItem: (productId: string, quantity: number, price: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  calculateTotal: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalPrice: 0,

      addItem: (productId, quantity, price) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.productId === productId);

          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
            return { items: updatedItems };
          }

          const newItem: CartItem = {
            productId,
            quantity,
            price,
            addedAt: new Date().toISOString(),
          };

          const updatedItems = [...state.items, newItem];
          get().calculateTotal();
          return { items: updatedItems };
        }),

      removeItem: (productId) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.productId !== productId);
          get().calculateTotal();
          return { items: updatedItems };
        }),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          );
          get().calculateTotal();
          return { items: updatedItems };
        }),

      clearCart: () => set({ items: [], totalPrice: 0 }),

      getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

      calculateTotal: () =>
        set((state) => ({
          totalPrice: state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        })),
    }),
    {
      name: 'cart-storage',
    }
  )
);
