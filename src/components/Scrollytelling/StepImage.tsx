import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { ScrollStep } from './types';

interface StepImageProps {
  step: ScrollStep;
  index: number;
  imageIndex: any; // MotionValue<number>
  y: any; // MotionValue<string>
}

export const StepImage: React.FC<StepImageProps> = ({ step, index, imageIndex, y }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: useTransform(
          imageIndex,
          [index - 0.5, index, index + 0.5],
          [0, 1, 0]
        ),
        y
      }}
      className="relative"
    >
      <img
        src={step.image}
        alt={step.title}
        className="w-full h-full object-cover rounded-2xl shadow-2xl"
      />
    </motion.div>
  );
};