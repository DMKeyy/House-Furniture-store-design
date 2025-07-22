
import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimations';

const BrandStory = () => {
  const features = [
    {
      number: "01",
      title: "Artisan Craftsmanship",
      description: "Every piece is meticulously crafted by skilled artisans using premium materials and time-honored techniques."
    },
    {
      number: "02", 
      title: "Sustainable Design",
      description: "We source responsibly and create furniture that stands the test of time, reducing environmental impact."
    },
    {
      number: "03",
      title: "Custom Solutions", 
      description: "From bespoke pieces to personalized collections, we bring your unique vision to life."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <ScrollAnimation animation="slideLeft">
              <h2 className="text-5xl font-light text-charcoal-black mb-6 tracking-tight">
                The Art of 
                <motion.span 
                  className="block text-warm-brown"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Comfortable Living
                </motion.span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                At Morbido, we believe that furniture should be more than just functional pieces. 
                Each item in our collection is thoughtfully designed to create spaces that nurture 
                the soul and inspire daily living.
              </p>
            </ScrollAnimation>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <ScrollAnimation
                  key={feature.number}
                  animation="slideLeft"
                  delay={index * 0.2}
                >
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ 
                        backgroundColor: "hsl(25 14% 32% / 0.2)",
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-warm-brown font-semibold">{feature.number}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal-black mb-2">{feature.title}</h3>
                      <p className="text-medium-grey leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animation="fadeUp" delay={0.8}>
              <motion.button 
                className="px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">Learn More About Us</span>
              </motion.button>
            </ScrollAnimation>
          </div>

          {/* Image */}
          <ScrollAnimation animation="slideRight" className="relative">
            <motion.div 
              className="rounded-3xl overflow-hidden soft-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800"
                alt="Morbido craftsmanship"
                className="w-full h-96 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-6 soft-shadow"
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                rotate: 2,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-warm-brown mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                >
                  15+
                </motion.div>
                <div className="text-sm text-medium-grey">Years of Excellence</div>
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
