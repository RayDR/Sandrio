import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  type?: 'card' | 'text' | 'circle';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  type = 'card',
}) => {
  const shimmerAnimation = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
    },
  };

  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-200% bg-no-repeat';
  
  const typeClasses = {
    card: 'rounded-lg aspect-square',
    text: 'rounded-full h-4 w-full',
    circle: 'rounded-full w-12 h-12',
  };

  return (
    <motion.div
      variants={shimmerAnimation}
      animate="animate"
      transition={{ duration: 1.5, repeat: Infinity }}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
      style={{
        backgroundSize: '200% 200%',
        animation: 'shimmer 2s infinite',
      }}
    />
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="card space-y-4">
      <Skeleton type="card" />
      <div className="p-4 space-y-3">
        <Skeleton type="text" className="w-3/4" />
        <Skeleton type="text" className="w-1/2" />
        <Skeleton type="text" className="w-full" />
      </div>
    </div>
  );
};
