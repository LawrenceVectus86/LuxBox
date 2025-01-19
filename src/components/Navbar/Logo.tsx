// import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Package className="w-6 h-6 text-white" />
      <span className="text-white font-bold text-xl">LUXBOX (Kelompok 2)</span>
    </motion.div>
  );
};