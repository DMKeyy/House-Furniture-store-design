
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Imports = () => {
  return (
    <div className="min-h-screen bg-soft-cream relative">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-28 right-20 w-32 h-32 bg-warm-brown/5 rounded-full"
          animate={{ 
            y: [0, -22, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-24 left-14 w-26 h-26 bg-warm-brown/7 rounded-full"
          animate={{ 
            y: [0, 14, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 bg-warm-brown/6 rounded-full"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-18 h-18 bg-warm-brown/4 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 0.85, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Global Imports
          </h1>
          <p className="text-2xl text-medium-grey font-light leading-relaxed">
            Curated pieces from master craftsmen around the world.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-20">
            <div className="text-center">
              <div className="aspect-square bg-light-grey rounded-2xl overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-warm-brown/20 to-medium-grey/10" />
              </div>
              <h3 className="text-2xl font-light text-charcoal-black mb-4">Italian Artisans</h3>
              <p className="text-medium-grey">
                Luxury furniture from renowned Italian workshops, where traditional craftsmanship meets contemporary design.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-light-grey rounded-2xl overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-soft-cream/60 to-light-grey/40" />
              </div>
              <h3 className="text-2xl font-light text-charcoal-black mb-4">Scandinavian Masters</h3>
              <p className="text-medium-grey">
                Minimalist masterpieces from Nordic designers who pioneered the modern furniture movement.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-light-grey rounded-2xl overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-charcoal-black/15 to-warm-brown/15" />
              </div>
              <h3 className="text-2xl font-light text-charcoal-black mb-4">Japanese Zen</h3>
              <p className="text-medium-grey">
                Serene, functional pieces that embody the Japanese philosophy of simplicity and harmony.
              </p>
            </div>
          </div>

          <div className="bg-pure-white rounded-3xl p-12 soft-shadow">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-charcoal-black mb-6">Featured Import Collections</h2>
              <p className="text-lg text-medium-grey max-w-3xl mx-auto">
                Each piece in our import collection is carefully selected for its exceptional quality, unique character, and ability to transform spaces with its presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-light-grey rounded-xl flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-warm-brown/30 to-medium-grey/20 rounded-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-charcoal-black mb-2">Heritage Collection</h4>
                  <p className="text-medium-grey">
                    Vintage and antique pieces restored by master craftsmen, bringing history into modern homes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-light-grey rounded-xl flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-soft-cream/80 to-light-grey/40 rounded-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-charcoal-black mb-2">Artisan Showcase</h4>
                  <p className="text-medium-grey">
                    Limited edition pieces from emerging artists and established masters from around the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Imports;
