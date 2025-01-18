import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BoxOptions } from './types';
import * as THREE from 'three';

interface BoxPreviewProps {
  options: BoxOptions;
}

export const BoxPreview: React.FC<BoxPreviewProps> = ({ options }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const boxRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Box
    const geometry = new THREE.BoxGeometry(
      options.width / 100,
      options.height / 100,
      options.depth / 100
    );
    const material = new THREE.MeshPhongMaterial({
      color: options.color,
      shininess: options.material === 'glossy' ? 100 : 30,
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);
    boxRef.current = box;

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Animation
    const animate = () => {
      if (!boxRef.current) return;
      
      requestAnimationFrame(animate);
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
      rendererRef.current?.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [options]);

  return (
    <motion.div
      ref={containerRef}
      className="aspect-square w-full bg-gray-50 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};