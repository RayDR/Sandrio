import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="bg-neutral rounded-lg aspect-square flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        key={selectedIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="product-image-container"
      >
        <img
          src={images[selectedIndex]}
          alt={title || 'Product'}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedIndex === index ? 'border-primary' : 'border-border'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};
