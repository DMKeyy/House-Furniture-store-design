import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Heart,
  ArrowRight,
  Clock
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Brand', href: '/brand' },
    { name: 'Custom Production', href: '/custom-production' },
    { name: 'Imports', href: '/imports' },
    { name: 'Contact', href: '/contact' }
  ];


  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-charcoal-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-warm-brown/5 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-16 w-24 h-24 bg-warm-brown/8 rounded-full"
          animate={{ 
            rotate: [0, 360],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-warm-brown/4 rounded-full"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-light text-warm-brown mb-4">Morbido</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Crafting exceptional furniture experiences since 1995. We believe in creating spaces that inspire and comfort, bringing elegance to every home.
                </p>
                <div className="flex items-center space-x-2 text-warm-brown">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Made with passion</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-medium text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-white/70 hover:text-warm-brown transition-colors duration-200 flex items-center group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Blog removed */}

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-medium text-white mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-warm-brown mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium">+1 (555) 123-4567</p>
                      <p className="text-white/60 text-sm">Sales & Design</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-warm-brown mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium">hello@morbido.com</p>
                      <p className="text-white/60 text-sm">General inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-warm-brown mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium">123 Design Street</p>
                      <p className="text-white/60 text-sm">New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-warm-brown mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium">Mon - Fri: 9AM - 6PM</p>
                      <p className="text-white/60 text-sm">Saturday: 10AM - 4PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="border-t border-white/10 mt-16 pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-light text-white mb-4">Stay Updated</h4>
              <p className="text-white/70 mb-6">
                Subscribe to our newsletter for the latest design trends, new arrivals, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-warm-brown transition-colors duration-200"
                />
                <motion.button
                  className="px-6 py-3 bg-warm-brown text-white rounded-xl font-medium hover:bg-warm-brown/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white/60 text-sm"
              >
                <p>© {currentYear} Morbido. All rights reserved. | Privacy Policy | Terms of Service</p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-4"
              >
                <span className="text-white/60 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm-brown transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
