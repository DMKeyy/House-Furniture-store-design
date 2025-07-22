
import React, { useState, useEffect } from 'react';
import { Users, Package, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from './ScrollAnimations';

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      icon: Users,
      number: 12000,
      displayNumber: '12,000+',
      label: 'Satisfied Clients',
      description: 'Happy customers worldwide'
    },
    {
      icon: Package,
      number: 45000,
      displayNumber: '45,000+',
      label: 'Orders Completed',
      description: 'Premium furniture delivered'
    },
    {
      icon: Award,
      number: 15,
      displayNumber: '15+',
      label: 'Design Awards',
      description: 'International recognition'
    },
    {
      icon: Globe,
      number: 25,
      displayNumber: '25+',
      label: 'Countries Served',
      description: 'Global presence'
    }
  ];

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section className="py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-charcoal-black mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Our commitment to quality and design excellence has earned us the trust of clients worldwide
          </p>
        </ScrollAnimation>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation
              key={index}
              animation="scale"
              delay={index * 0.2}
            >
              <motion.div 
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="glass-effect rounded-2xl p-8 soft-shadow hover:shadow-lg transition-all duration-300"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                    scale: 1.02
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300"
                    whileHover={{ 
                      backgroundColor: "hsl(0 0% 11%)",
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl lg:text-5xl font-light text-charcoal-black mb-2"
                    initial={{ scale: 0 }}
                    animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {stat.displayNumber}
                  </motion.div>
                  
                  <div className="text-lg font-medium text-warm-brown mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-medium-grey">
                    {stat.description}
                  </div>
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
