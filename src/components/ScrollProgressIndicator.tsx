import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useParallax';

const ScrollProgressIndicator: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-warm-brown/20 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: progress > 5 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-warm-brown origin-left"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default ScrollProgressIndicator;
