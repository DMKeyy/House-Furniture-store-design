
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import ScrollAnimation from '../../components/ScrollAnimations';
import PageTransition from '../../components/PageTransition';

const ModernMinimal = () => {
  const products = [
    { name: "Minimal Chair Alpha", description: "Clean geometric forms meet comfort", price: 349 },
    { name: "Minimal Chair Beta", description: "Sleek design for modern spaces", price: 399 },
    { name: "Minimal Chair Gamma", description: "Ergonomic minimalism", price: 449 },
    { name: "Minimal Table One", description: "Functional simplicity", price: 599 },
    { name: "Minimal Table Two", description: "Contemporary elegance", price: 649 },
    { name: "Minimal Sofa Set", description: "Luxurious comfort minimally designed", price: 1299 }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-soft-cream">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollAnimation animation="fadeUp">
              <motion.h1 
                className="text-5xl md:text-7xl font-light text-charcoal-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Modern & Minimal
              </motion.h1>
              <motion.p 
                className="text-xl text-medium-grey max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Clean lines, functional beauty, and timeless design. Our Modern & Minimal collection 
                celebrates the power of simplicity in contemporary living spaces.
              </motion.p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale"
                  delay={index * 0.1}
                >
                  <motion.div 
                    className="group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="aspect-square bg-light-grey rounded-2xl overflow-hidden mb-4 relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-medium-grey/20 to-warm-brown/20"
                        whileHover={{ 
                          background: "linear-gradient(135deg, rgba(145,145,145,0.3), rgba(98,80,67,0.4))"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-charcoal-black/20 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          className="px-6 py-3 bg-white text-charcoal-black rounded-full font-medium shadow-lg"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          View Details
                        </motion.button>
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-medium text-charcoal-black mb-2"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {product.name}
                    </motion.h3>
                    <p className="text-medium-grey mb-4">
                      {product.description}
                    </p>
                    <motion.p 
                      className="text-2xl font-light text-warm-brown"
                      whileHover={{ scale: 1.05, color: "hsl(0 0% 11%)" }}
                      transition={{ duration: 0.2 }}
                    >
                      ${product.price.toLocaleString()}
                    </motion.p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <ScrollAnimation animation="fadeUp" className="pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="glass-effect rounded-3xl p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-light text-charcoal-black mb-4">
                Need Something Custom?
              </h2>
              <p className="text-lg text-medium-grey mb-8">
                Our design team can create bespoke pieces that perfectly match your vision and space.
              </p>
              <motion.button
                className="px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Custom Project
              </motion.button>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </PageTransition>
  );
};

export default ModernMinimal;
