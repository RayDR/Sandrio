import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@types/index';
import { ProductCard } from '@components/product/ProductCard';
import { Button } from '@components/common/Button';
import { ChevronRight } from 'lucide-react';

// Mock data - será reemplazado con datos de API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Hello Kitty Plush',
    description: 'Adorable Hello Kitty plushie',
    price: 299,
    originalPrice: 399,
    image: 'https://via.placeholder.com/300x300?text=Hello+Kitty+Plush',
    images: [],
    category: 'Plushies',
    stock: 15,
    rating: 4.8,
    reviews: 45,
    featured: true,
    sku: 'HK001',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'My Melody Cup',
    description: 'Cute ceramic cup with My Melody design',
    price: 199,
    image: 'https://via.placeholder.com/300x300?text=My+Melody+Cup',
    images: [],
    category: 'Drinkware',
    stock: 25,
    rating: 4.6,
    reviews: 32,
    featured: true,
    sku: 'MM001',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Badtz-Maru Keychain',
    description: 'Tiny Badtz-Maru keychain accessory',
    price: 89,
    image: 'https://via.placeholder.com/300x300?text=Badtz-Maru+Keychain',
    images: [],
    category: 'Accessories',
    stock: 50,
    rating: 4.9,
    reviews: 67,
    featured: false,
    sku: 'BM001',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const Home: React.FC = () => {
  const [featured, setFeatured] = useState<Product[]>(mockProducts.filter(p => p.featured));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-text mb-4"
            >
              🎀 Bienvenido a Sanrio Store
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-text mb-8"
            >
              Los mejores productos oficiales de Sanrio con envío rápido
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="primary" size="lg">
                Explorar Tienda
                <ChevronRight size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-3xl font-bold text-text">Productos Destacados</h2>
          <Button variant="outline">
            Ver Todo
            <ChevronRight size={18} />
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                product={product}
                onAddToCart={(p) => console.log('Add to cart:', p)}
                onFavorite={(p) => console.log('Favorite:', p)}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-bold text-text mb-8">Explora por Categorías</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {['Hello Kitty', 'My Melody', 'Badtz-Maru', 'Gudetama', 'Keroppi', 'Accesorios'].map((cat) => (
            <motion.div
              key={cat}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-4 text-center cursor-pointer shadow-soft hover:shadow-soft-lg transition-all"
            >
              <div className="text-4xl mb-2">🎀</div>
              <p className="font-semibold text-sm text-text">{cat}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Newsletter</h2>
        <p className="mb-6 text-lg">Recibe ofertas exclusivas y novedades sobre nuevos productos</p>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 px-4 py-3 rounded-lg text-text focus:outline-none"
          />
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            Suscribirse
          </Button>
        </div>
      </motion.section>
    </div>
  );
};
