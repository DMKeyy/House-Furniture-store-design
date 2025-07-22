
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from './ScrollAnimations';

const CollectionGrid = () => {
  const collections = [
    {
      name: 'Modern & Minimal',
      description: 'Clean lines and timeless elegance',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600',
      featured: true
    },
    {
      name: 'Wabi Harmony',
      description: 'Embracing imperfection and natural beauty',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600',
      featured: false
    },
    {
      name: 'Nordic Calm',
      description: 'Scandinavian simplicity meets comfort',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600',
      featured: false
    },
    {
      name: 'Urban Edge',
      description: 'Contemporary design for modern living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600',
      featured: false
    },
    {
      name: 'Elegant Home',
      description: 'Sophisticated pieces for refined spaces',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600',
      featured: false
    },
    {
      name: 'Coastal Breeze',
      description: 'Light, airy designs inspired by the sea',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600',
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-soft-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation animation="fadeUp" className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-light text-charcoal-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Collections
          </motion.h2>
          <motion.p 
            className="text-lg text-medium-grey max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover carefully curated furniture collections that blend comfort, style, and functionality
          </motion.p>
        </ScrollAnimation>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <ScrollAnimation
              key={collection.name}
              animation="fadeUp"
              delay={index * 0.1}
              className={`${
                collection.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <motion.div
                className="group relative overflow-hidden rounded-3xl soft-shadow cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Image Container */}
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <motion.img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  
                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-charcoal-black/60 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div 
                    className="glass-effect rounded-2xl p-6"
                    initial={{ y: 20, opacity: 0.8 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal-black mb-2">
                          {collection.name}
                        </h3>
                        <p className="text-medium-grey text-sm leading-relaxed">
                          {collection.description}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-warm-brown" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Button */}
        <ScrollAnimation animation="fadeUp" delay={0.5} className="text-center mt-12">
          <motion.button 
            className="group flex items-center space-x-3 px-8 py-4 bg-white text-charcoal-black rounded-full hover:bg-warm-brown hover:text-white transition-all duration-300 soft-shadow mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">View All Collections</span>
            <motion.div
              animate={{ x: [0, 5, 0], y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CollectionGrid;
