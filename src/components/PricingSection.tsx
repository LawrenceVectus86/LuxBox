// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

export const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const plans = [
    {
      name: "Starter",
      price: "100.000",
      features: [
        "Basic customization options",
        "3 Ukuran Bervariasi",
        "Material Standar",
        "Warna Standar",
        "Pembelian Minimal 10 Box"
      ]
    },
    {
      name: "Professional",
      price: "350.000",
      popular: true,
      features: [
        "Kustomisasi Tingkat",
        "Semua Pilihan Ukuran",
        "Premium materials",
        "Berbagai Macam Warna",
        "Kustom Isi",
        "Pembelian Minimal 5 Box"
      ]
    },
    {
      name: "Enterprise",
      price: "499.000",
      features: [
        "Full Kustomisasi Bahan",
        "Kustom Ukuran",
        "Material Premium",
        "Tidak ada Batasan Cetak",
        "Kustom Aksesoris",
        "Tanpa Minimum Order"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Harga Mulai Dari</h2>
          <p className="text-xl text-gray-600">Pilih Premium Box untuk Brand Anda dan Sebagai Hadiah</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                plan.popular ? 'border-2 border-indigo-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Rp.{plan.price}</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};