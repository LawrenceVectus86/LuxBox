import { useState } from 'react';
import { motion } from 'framer-motion';
import { BoxCustomizer } from './BoxCustomizer';
import { BoxPreview } from './BoxPreview';
import { BoxOptions } from './types';

export const BoxCreator = () => {
  const [boxOptions, setBoxOptions] = useState<BoxOptions>({
    width: 200,
    height: 150,
    depth: 100,
    color: '#1a365d',
    material: 'matte',
    pattern: 'none',
  });

  return (
    <section id="create" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Create Your Perfect Box</h2>
          <p className="text-xl text-gray-600">
            Customize every detail to match your vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <BoxCustomizer options={boxOptions} onChange={setBoxOptions} />
          <BoxPreview options={boxOptions} />
        </div>
      </div>
    </section>
  );
};