import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@types/index';
import { ProductCard } from '@components/product/ProductCard';
import { ChevronDown, Filter } from 'lucide-react';

const mockProducts: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: `prod-${i}`,
  name: `Sanrio Product ${i + 1}`,
  description: `Amazing Sanrio product ${i + 1}`,
  price: 150 + Math.random() * 300,
  originalPrice: Math.random() > 0.5 ? 250 + Math.random() * 300 : undefined,
  image: `https://via.placeholder.com/300x300?text=Product+${i + 1}`,
  images: [],
  category: ['Hello Kitty', 'My Melody', 'Badtz-Maru'][i % 3],
  stock: Math.floor(Math.random() * 50),
  rating: 3.5 + Math.random() * 1.5,
  reviews: Math.floor(Math.random() * 100),
  featured: i < 3,
  sku: `SKU${i}`,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

export const Shop: React.FC = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = ['all', 'Hello Kitty', 'My Melody', 'Badtz-Maru', 'Gudetama', 'Accesorios'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-text">Nuestra Tienda</h1>
        <p className="text-gray-600 mt-2">Descubre nuestra amplia colección de productos Sanrio</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Filters */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 space-y-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
              <Filter size={20} />
              Filtros
            </h3>

            {/* Category Filter */}
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-text">Categoría</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={category === cat}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-text capitalize">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-text">Rango de Precio</h4>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* In Stock Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-text">En Stock</span>
              </label>
            </div>
          </div>
        </motion.aside>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort Options */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8 pb-4 border-b border-border"
          >
            <p className="text-gray-600">{mockProducts.length} productos encontrados</p>
            <div className="flex items-center gap-2">
              <span className="text-text font-semibold">Ordenar por:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-border rounded-lg text-text cursor-pointer focus:outline-none appearance-none pr-8"
                >
                  <option value="newest">Más Nuevo</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Calificado</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-text" />
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mockProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  product={product}
                  onAddToCart={(p) => console.log('Add to cart:', p)}
                  onFavorite={(p) => console.log('Favorite:', p)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
