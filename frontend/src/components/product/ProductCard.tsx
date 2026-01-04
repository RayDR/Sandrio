import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Product } from '@types/index';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onFavorite?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onFavorite,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card overflow-hidden group"
    >
      {/* Image Container */}
      <div className="product-image-container bg-neutral overflow-hidden relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-text truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 truncate">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 my-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{'★'}</span>
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 my-3">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm line-through text-gray-400">${product.originalPrice}</span>
          )}
        </div>

        {/* Stock Status */}
        <p
          className={`text-xs font-semibold mb-3 ${
            product.stock > 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart?.(product)}
            className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            <span className="text-sm">Agregar</span>
          </button>
          <button
            onClick={() => onFavorite?.(product)}
            className="p-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            <Heart size={16} />
          </button>
          <button className="p-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-text transition-all">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
