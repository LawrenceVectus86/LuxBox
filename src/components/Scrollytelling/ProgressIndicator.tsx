import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { ProgressIndicatorProps } from './types';

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentIndex,
  imageIndex,
  stepsLength
}) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
      {Array.from({ length: stepsLength }).map((_, index) => (
        <motion.div
          key={index}
          className="w-3 h-3 rounded-full bg-white shadow-lg"
          style={{
            backgroundColor: currentIndex === index ? '#4F46E5' : '#E5E7EB',
            scale: useTransform(
              imageIndex,
              [index - 0.5, index, index + 0.5],
              [1, 1.4, 1]
            ),
          }}
        />
      ))}
    </div>
  );
};