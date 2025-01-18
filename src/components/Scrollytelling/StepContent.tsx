// import React from 'react';
import { motion } from 'framer-motion';
import { ScrollStep } from './types';

interface StepContentProps {
  currentIndex: number;
  step: ScrollStep;
}

export const StepContent: React.FC<StepContentProps> = ({ currentIndex, step }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-4xl font-bold mb-4">{step.title}</h2>
        <p className="text-xl text-gray-600">{step.description}</p>
      </motion.div>
    </motion.div>
  );
};