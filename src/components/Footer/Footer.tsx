// import React from 'react';
import { motion } from 'framer-motion';
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { FooterLink } from './FooterLink';
import { SocialLink } from './SocialLink';

export const Footer = () => {
  const links = {
    company: ['About Us', 'Careers', 'Blog', 'Press'],
    support: ['Help Center', 'Safety Center', 'Community Guidelines'],
    legal: ['Terms of Service', 'Privacy Policy', 'Cookie Settings'],
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Package className="w-6 h-6" />
              <span className="font-bold text-xl">LUXBOX (Kelompok 2)</span>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Crafting premium packaging solutions for brands that demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <FooterLink key={link} href="#">{link}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <FooterLink key={link} href="#">{link}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>contact@luxbox.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>123 Design Street, NY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LUXBOX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};