// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  video?: string;
  sku: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

// Cart Types
export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  addedAt: string;
}

export interface Cart {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  lastUpdated: string;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  preferences: UserPreferences;
  createdAt: string;
}

export interface UserPreferences {
  language: string;
  currency: string;
  notifications: boolean;
}

// Plugin System
export interface PluginConfig {
  id: string;
  name: string;
  enabled: boolean;
  version: string;
  config?: Record<string, any>;
}

export interface Plugin {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  enabled: boolean;
  component?: React.ComponentType<any>;
  config?: PluginConfig;
}

// Theme Configuration
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    text: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    fontSize: Record<string, string>;
  };
  spacing: {
    unit: number;
  };
}

// Store Configuration
export interface StoreConfig {
  name: string;
  description: string;
  logo: string;
  currency: string;
  languages: string[];
  defaultLanguage: string;
  theme: ThemeConfig;
  plugins: PluginConfig[];
  features: {
    cart: boolean;
    checkout: boolean;
    accounts: boolean;
    reviews: boolean;
    videos: boolean;
    gamification: boolean;
  };
}

// Coupon Types
export interface Coupon {
  id: string;
  code: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  expiresAt: string;
  maxUses?: number;
  currentUses: number;
  minOrder?: number;
  active: boolean;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  image: string;
  published: boolean;
  publishedAt?: string;
  tags: string[];
  views: number;
}

// Analytics Types
export interface Analytics {
  productId: string;
  views: number;
  addedToCart: number;
  purchased: number;
  lastViewed: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
