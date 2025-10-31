
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';
import Header from '../components/Header';
import ScrollAnimation from '../components/ScrollAnimations';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const Brand = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Responsible sourcing and eco-friendly practices"
    },
    {
      icon: Award,
      title: "Quality", 
      description: "Uncompromising standards in every detail"
    },
    {
      icon: Heart,
      title: "Comfort",
      description: "Designs that embrace and nurture"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-soft-cream relative">
        {/* Background decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-32 right-16 w-28 h-28 bg-warm-brown/5 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-40 left-12 w-20 h-20 bg-warm-brown/8 rounded-full"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-14 h-14 bg-warm-brown/6 rounded-full"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/5 w-24 h-24 bg-warm-brown/4 rounded-full"
            animate={{ 
              y: [0, -12, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fadeUp">
              <motion.h1 
                className="text-5xl md:text-7xl font-light text-charcoal-black mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The Morbido Story
              </motion.h1>
              <motion.p 
                className="text-2xl text-medium-grey font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Founded on the belief that furniture should be more than functional—it should be transformative.
              </motion.p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Story Content */}
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <ScrollAnimation animation="slideLeft">
                <h2 className="text-4xl font-light text-charcoal-black mb-6">Our Philosophy</h2>
                <p className="text-lg text-medium-grey leading-relaxed mb-6">
                  At Morbido, we believe that exceptional furniture isn't just about aesthetics or function—it's about creating spaces that nurture the soul. Each piece is thoughtfully designed to bring warmth, comfort, and beauty into your daily life.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  Our name, derived from the Italian word for "soft," reflects our commitment to creating furniture that feels as good as it looks. Every curve, every texture, every detail is considered with your comfort in mind.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideRight">
                <motion.div 
                  className="aspect-[4/3] bg-light-grey rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                    alt="Elegant living room with comfortable modern furniture showcasing our philosophy of comfort and beauty"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </motion.div>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <ScrollAnimation animation="slideLeft">
                <motion.div 
                  className="aspect-[4/3] bg-light-grey rounded-2xl overflow-hidden lg:order-first"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80"
                    alt="Skilled craftsman working on wooden furniture with traditional tools demonstrating our commitment to quality craftsmanship"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideRight">
                <h2 className="text-4xl font-light text-charcoal-black mb-6">Our Craft</h2>
                <p className="text-lg text-medium-grey leading-relaxed mb-6">
                  Every Morbido piece is crafted with meticulous attention to detail. We partner with skilled artisans who share our passion for quality, using sustainable materials and time-honored techniques passed down through generations.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  From the selection of premium woods to the final hand-applied finish, each step in our process is designed to create furniture that will be treasured for years to come.
                </p>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fadeUp" className="text-center">
              <h2 className="text-4xl font-light text-charcoal-black mb-8">Our Values</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {values.map((value, index) => (
                  <ScrollAnimation
                    key={value.title}
                    animation="scale"
                    delay={index * 0.2}
                  >
                    <motion.div 
                      className="text-center"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-warm-brown/10 rounded-full mx-auto mb-4 flex items-center justify-center"
                        whileHover={{ 
                          backgroundColor: "hsl(25 14% 32% / 0.2)",
                          scale: 1.1,
                          rotate: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="w-8 h-8 text-warm-brown" />
                      </motion.div>
                      <h3 className="text-xl font-medium text-charcoal-black mb-2">{value.title}</h3>
                      <p className="text-medium-grey">{value.description}</p>
                    </motion.div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
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
                Experience the Morbido Difference
              </h2>
              <p className="text-lg text-medium-grey mb-8">
                Discover furniture that transforms spaces and elevates your everyday moments.
              </p>
              <motion.button
                className="px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Collections
              </motion.button>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Brand;
