import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-1">
          <NavLink href="#home" isMobile onClick={onClose}>
            Beranda
          </NavLink>
          <NavLink href="#about" isMobile onClick={onClose}>
            Tentang
          </NavLink>
          <NavLink href="#create" isMobile onClick={onClose}>
            Buat Box
          </NavLink>
          <NavLink href="#pricing" isMobile onClick={onClose}>
            Harga
          </NavLink>
        </nav>
        <motion.button
          className="w-full bg-white text-black py-3 px-6 rounded-full font-medium mt-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
        >
          Mulai Sekarang
        </motion.button>
      </div>
    </motion.div>
  );
};