import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollytellingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll();
  
  const steps = [
    {
      image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2070",
      title: "Design",
      description: "Start with your vision and watch it come to life through our intuitive design interface"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2069",
      title: "Customize",
      description: "Fine-tune every detail to match your brand's aesthetic perfectly"
    },
    {
      image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070",
      title: "Create",
      description: "Your unique LUXBOX is crafted with precision and care"
    }
  ];

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
                <h2 className="text-4xl font-bold mb-4">{steps[currentIndex].title}</h2>
                <p className="text-xl text-gray-600">{steps[currentIndex].description}</p>
              </motion.div>
            </motion.div>

            {/* Image container */}
            <div className="relative h-[600px] w-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
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
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll progress indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {steps.map((_, index) => (
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
    </section>
  );
};