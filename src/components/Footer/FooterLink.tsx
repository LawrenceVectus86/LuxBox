// import React from 'react';
import { motion } from 'framer-motion';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <motion.a
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
        whileHover={{ x: 5 }}
      >
        {children}
      </motion.a>
    </li>
  );
};