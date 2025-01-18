import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { designSteps } from './data';
import { ProgressIndicator } from './ProgressIndicator';
import { StepContent } from './StepContent';
import { StepImage } from './StepImage';

export const ScrollytellingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Transform scrollYProgress (0-1) to image index (0-2)
  const imageIndex = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 2]);

  // Update current index based on scroll position
  useEffect(() => {
    const unsubscribe = imageIndex.onChange(v => {
      setCurrentIndex(Math.round(v));
    });
    return () => unsubscribe();
  }, [imageIndex]);

  // Transform for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative min-h-[300vh] bg-white">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <StepContent
              currentIndex={currentIndex}
              step={designSteps[currentIndex]}
            />

            {/* Image container */}
            <div className="relative h-[600px] w-full">
              {designSteps.map((step, index) => (
                <StepImage
                  key={index}
                  step={step}
                  index={index}
                  imageIndex={imageIndex}
                  y={y}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <ProgressIndicator
        currentIndex={currentIndex}
        imageIndex={imageIndex}
        stepsLength={designSteps.length}
      />
    </section>
  );
};