import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  isMobile = false,
  onClick 
}) => {
  return (
    <motion.a
      href={href}
      className={`
        transition-colors
        ${isMobile 
          ? 'text-white text-lg py-3 px-6 block w-full hover:bg-white/10' 
          : 'text-white/90 hover:text-white px-4 py-2 text-sm font-medium'
        }
      `}
      whileHover={isMobile ? { x: 4 } : { scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
};