import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, Truck, Clock } from 'lucide-react';

const steps = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Produksi",
    description: "Desain Anda masuk ke tahap produksi dengan pengrajin ahli kami"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Kontrol Kualitas",
    description: "Pemeriksaan kualitas ketat untuk memastikan kesempurnaan"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Pengiriman",
    description: "Pengiriman cepat dan aman sampai ke tempat Anda"
  }
];

export const CreateSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proses Pembuatan</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Dari desain hingga pengiriman, kami menjamin kualitas di setiap tahap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};