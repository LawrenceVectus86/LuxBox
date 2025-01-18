// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Box, Sparkles } from 'lucide-react';

export const CustomizeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Colors",
      description: "Choose from our premium palette or create your own unique shade"
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Size Options",
      description: "Select the perfect dimensions for your needs"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Finishing Touches",
      description: "Add foil stamping, embossing, or special textures"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Customize Your LUXBOX</h2>
          <p className="text-xl text-gray-600">Make it uniquely yours with our design options</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};