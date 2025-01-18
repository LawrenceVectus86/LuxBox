import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center"
      >
        <Package className="w-12 md:w-16 h-12 md:h-16 mb-6 md:mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">LUXBOX</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl px-4">
          Ciptakan momen sempurna Anda dengan kemasan mewah yang dapat disesuaikan untuk menceritakan kisah Anda
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-semibold text-base md:text-lg"
        >
          Mulai Desain
        </motion.button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </section>
  );
};