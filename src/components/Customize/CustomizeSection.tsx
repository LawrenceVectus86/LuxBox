import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Box, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Material",
    description: "Kardus premium, material daur ulang, atau finishing mewah"
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Finishing",
    description: "Permukaan matte, glossy, atau bertekstur untuk berbagai gaya"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Hiasan",
    description: "Tambahkan foil stamping, embossing, atau lapisan khusus"
  }
];

export const CustomizeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kustomisasi Box Anda</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Pilih dari koleksi premium material dan finishing kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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