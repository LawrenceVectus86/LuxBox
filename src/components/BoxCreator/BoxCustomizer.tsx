// import React from 'react';
import { motion } from 'framer-motion';
import { BoxOptions } from './types';

interface BoxCustomizerProps {
  options: BoxOptions;
  onChange: (options: BoxOptions) => void;
}

export const BoxCustomizer: React.FC<BoxCustomizerProps> = ({ options, onChange }) => {
  const handleChange = (key: keyof BoxOptions, value: string | number) => {
    onChange({ ...options, [key]: value });
  };

  const materials = [
    { id: 'matte', name: 'Matte' },
    { id: 'glossy', name: 'Glossy' },
    { id: 'textured', name: 'Textured' },
  ];

  const patterns = [
    { id: 'none', name: 'None' },
    { id: 'dots', name: 'Dots' },
    { id: 'lines', name: 'Lines' },
    { id: 'grid', name: 'Grid' },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-6">Customize Your Box</h3>
      
      <div className="space-y-6">
        {/* Dimensions */}
        <div>
          <h4 className="text-lg font-medium mb-4">Dimensions (mm)</h4>
          <div className="grid grid-cols-3 gap-4">
            {['width', 'height', 'depth'].map((dim) => (
              <div key={dim}>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {dim}
                </label>
                <input
                  type="number"
                  value={options[dim as keyof BoxOptions]}
                  onChange={(e) => handleChange(dim as keyof BoxOptions, Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  min="50"
                  max="500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Color
          </label>
          <input
            type="color"
            value={options.color}
            onChange={(e) => handleChange('color', e.target.value)}
            className="w-full h-10 p-1 rounded-md cursor-pointer"
          />
        </div>

        {/* Material */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material
          </label>
          <div className="grid grid-cols-3 gap-2">
            {materials.map((material) => (
              <motion.button
                key={material.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md ${
                  options.material === material.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => handleChange('material', material.id)}
              >
                {material.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Pattern */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pattern
          </label>
          <div className="grid grid-cols-2 gap-2">
            {patterns.map((pattern) => (
              <motion.button
                key={pattern.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md ${
                  options.pattern === pattern.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => handleChange('pattern', pattern.id)}
              >
                {pattern.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};