// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, Leaf, Shield, TrendingUp } from 'lucide-react';

export const ProfileSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stats = [
    { number: "10K+", label: "Box Terjual" },
    { number: "98%", label: "Kepuasan Pelanggan" },
    { number: "50+", label: "Mitra Bisnis" },
    { number: "15+", label: "Tahun Pengalaman" }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Premium",
      description: "Setiap LUXBOX dibuat dengan material terbaik dan standar kualitas tertinggi"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tim Ahli",
      description: "Didukung oleh tim desainer dan pengrajin profesional berpengalaman"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Jangkauan Global",
      description: "Melayani pelanggan di berbagai negara dengan standar internasional"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Ramah Lingkungan",
      description: "Menggunakan material daur ulang dan proses produksi berkelanjutan"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garansi Kualitas",
      description: "Jaminan kepuasan dengan garansi pengembalian 100%"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Inovasi Berkelanjutan",
      description: "Terus mengembangkan desain dan teknologi terbaru"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Profil LUXBOX</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sejak 2024, LUXBOX telah menjadi pionir dalam industri kemasan premium, 
            menghadirkan solusi kemasan inovatif yang menggabungkan keindahan, 
            fungsionalitas, dan keberlanjutan.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Siap untuk memulai proyek bersama kami?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            Hubungi Tim Kami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};