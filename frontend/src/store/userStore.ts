import { create } from 'zustand';
import { User, UserPreferences } from '@types/index';

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}

const defaultUser: User = {
  id: '',
  email: '',
  name: '',
  preferences: {
    language: 'es-MX',
    currency: 'MXN',
    notifications: true,
  },
  createdAt: new Date().toISOString(),
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user: { ...defaultUser, ...user },
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),

  updatePreferences: (preferences) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            preferences: { ...state.user.preferences, ...preferences },
          }
        : null,
    })),
}));
