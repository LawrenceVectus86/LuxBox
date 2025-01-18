import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, Clock } from 'lucide-react';

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Only the finest materials and craftsmanship go into every LUXBOX"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sustainable",
      description: "Eco-friendly materials and responsible manufacturing practices"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timeless Design",
      description: "Classic aesthetics meet modern functionality"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About LUXBOX</h2>
          <p className="text-xl text-gray-600 mb-8">
            We believe in creating more than just boxes. Each LUXBOX is a canvas for your brand's story,
            crafted with precision and care to deliver an unforgettable unboxing experience.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"
              alt="LUXBOX Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-indigo-50 rounded-full mb-4">
                <div className="text-indigo-600">{value.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};