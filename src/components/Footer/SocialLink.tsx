// import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};