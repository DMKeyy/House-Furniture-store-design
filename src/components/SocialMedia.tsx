
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimations';

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      followers: '125K',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: '#',
      followers: '89K',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: '#',
      followers: '67K',
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      href: '#',
      followers: '45K',
      color: 'hover:text-red-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      followers: '23K',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-charcoal-black mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Stay connected and discover the latest in luxury furniture design and home inspiration
          </p>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {socialLinks.map((social, index) => (
            <ScrollAnimation
              key={index}
              animation="scale"
              delay={index * 0.1}
            >
              <motion.a
                href={social.href}
                className={`group flex flex-col items-center p-6 rounded-2xl glass-effect soft-shadow transition-all duration-300 ${social.color}`}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-light-grey rounded-full flex items-center justify-center mb-4 group-hover:bg-warm-brown transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon className="w-8 h-8 text-medium-grey group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <div className="text-lg font-medium text-charcoal-black mb-1">
                  {social.name}
                </div>
                <motion.div 
                  className="text-sm text-medium-grey"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.followers} followers
                </motion.div>
              </motion.a>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeUp" delay={0.6} className="text-center mt-12">
          <p className="text-medium-grey mb-6">
            Join our community and be the first to know about new collections and exclusive offers
          </p>
          <motion.button 
            className="px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Follow All Channels
          </motion.button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SocialMedia;
