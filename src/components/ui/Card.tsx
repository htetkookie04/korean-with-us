import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-cherry-100';
  const hoverClasses = hover ? 'hover:shadow-xl hover:border-cherry-200 transition-all duration-300' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;