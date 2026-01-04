import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Home, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  cartCount?: number;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0, onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const navItems: NavItem[] = [
    { label: 'Inicio', path: '/', icon: <Home size={20} /> },
    { label: 'Tienda', path: '/shop' },
    { label: 'Galería', path: '/gallery' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-soft">
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center"
            >
              <span className="text-2xl">🎀</span>
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-text">Sanrio Store</h1>
              <p className="text-xs text-gray-600">Premium Products</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch?.(e.target.value);
              }}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-neutral"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-neutral rounded-lg transition-colors">
              <Heart size={20} className="text-primary" />
            </button>
            <button className="p-2 hover:bg-neutral rounded-lg transition-colors">
              <User size={20} className="text-text" />
            </button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="relative p-2 hover:bg-neutral rounded-lg transition-colors"
            >
              <ShoppingCart size={20} className="text-text" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 text-text hover:text-primary transition-colors font-medium"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
