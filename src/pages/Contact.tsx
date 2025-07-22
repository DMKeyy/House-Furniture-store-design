import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ScrollAnimation from '../components/ScrollAnimations';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import { 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  MessageSquare, 
  MapPin, 
  Send,
  User,
  MessageCircle,
  Star,
  Quote,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Headphones,
  Shield,
  Award,
  Users,
  Heart,
  Zap
} from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const phoneNumbers = [
    {
      title: 'Sales & Design',
      number: '+1 (555) 123-4567',
      description: 'Product inquiries & consultations'
    },
    {
      title: 'Customer Support',
      number: '+1 (555) 123-4568',
      description: 'Orders & after-sales support'
    }
  ];

  const emailAddresses = [
    {
      title: 'General',
      email: 'hello@morbido.com',
      description: 'General inquiries'
    },
    {
      title: 'Support',
      email: 'support@morbido.com',
      description: 'Customer support'
    },
    {
      title: 'Design',
      email: 'design@morbido.com',
      description: 'Custom projects'
    },
    {
      title: 'Press',
      email: 'press@morbido.com',
      description: 'Media inquiries'
    }
  ];

  const features = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our products"
    },
    {
      icon: Award,
      title: "Expert Design",
      description: "Professional design consultation and advice"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick turnaround on all inquiries and orders"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-soft-cream">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 right-10 w-32 h-32 bg-warm-brown/5 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-24 h-24 bg-warm-brown/10 rounded-full"
              animate={{ 
                y: [0, 15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-16 h-16 bg-warm-brown/5 rounded-full"
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-20 h-20 bg-warm-brown/8 rounded-full"
              animate={{ 
                y: [0, -25, 0],
                x: [0, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-16 w-14 h-14 bg-warm-brown/6 rounded-full"
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-2/3 left-16 w-18 h-18 bg-warm-brown/4 rounded-full"
              animate={{ 
                x: [0, -20, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <ScrollAnimation animation="fadeUp">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 soft-shadow mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Heart className="w-5 h-5 text-warm-brown" />
                <span className="text-sm font-medium text-charcoal-black">We're here to help</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-light text-charcoal-black mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get in <span className="text-warm-brown">Touch</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-medium-grey max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We'd love to hear from you. Choose your preferred way to reach out and let's start a conversation about your dream space.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm text-medium-grey"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-warm-brown" />
                  <span>24hr response time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-warm-brown" />
                  <span>Expert design team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-warm-brown" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </motion.div>
            </ScrollAnimation>
          </div>
        </section>

        

        {/* Main Contact Form and Information */}
        <section className="pb-20 px-6 relative overflow-hidden">
          {/* Contact form section background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-12 right-24 w-20 h-20 bg-warm-brown/5 rounded-full"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-32 left-20 w-24 h-24 bg-warm-brown/7 rounded-full"
              animate={{ 
                scale: [1, 1.4, 1],
                x: [0, 20, 0]
              }}
              transition={{ 
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/3 left-12 w-14 h-14 bg-warm-brown/6 rounded-full"
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <ScrollAnimation animation="slideLeft">
                  <motion.div 
                    className="bg-white rounded-3xl p-8 md:p-12 soft-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-light text-charcoal-black mb-4">Send us a Message</h2>
                      <p className="text-medium-grey">
                        Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, please call us directly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <label htmlFor="name" className="block text-sm font-medium text-charcoal-black mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200"
                            placeholder="Enter your full name"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal-black mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200"
                            placeholder="Enter your email"
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <label htmlFor="phone" className="block text-sm font-medium text-charcoal-black mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200"
                            placeholder="Enter your phone number"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <label htmlFor="subject" className="block text-sm font-medium text-charcoal-black mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="product">Product Information</option>
                            <option value="custom">Custom Design</option>
                            <option value="support">Customer Support</option>
                            <option value="partnership">Partnership</option>
                            <option value="showroom">Showroom Visit</option>
                          </select>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <label htmlFor="preferredContact" className="block text-sm font-medium text-charcoal-black mb-2">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={formData.preferredContact === 'email'}
                              onChange={handleChange}
                              className="w-4 h-4 text-warm-brown border-light-grey focus:ring-warm-brown"
                            />
                            <span className="ml-2 text-sm text-charcoal-black">Email</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={formData.preferredContact === 'phone'}
                              onChange={handleChange}
                              className="w-4 h-4 text-warm-brown border-light-grey focus:ring-warm-brown"
                            />
                            <span className="ml-2 text-sm text-charcoal-black">Phone</span>
                          </label>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal-black mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200 resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </motion.div>

                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <motion.button
                          type="submit"
                          className="inline-flex items-center space-x-3 px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Send className="w-5 h-5" />
                          <span className="font-medium">Send Message</span>
                        </motion.button>
                      </motion.div>
                    </form>
                  </motion.div>
                </ScrollAnimation>
              </div>

              {/* Contact Information Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                
                {/* Phone Numbers */}
                <ScrollAnimation animation="slideRight" delay={0.2}>
                  <motion.div 
                    className="bg-white rounded-2xl p-6 soft-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <Phone className="w-6 h-6 text-warm-brown mr-3" />
                      <h3 className="text-lg font-medium text-charcoal-black">Phone Numbers</h3>
                    </div>
                    <div className="space-y-4">
                      {phoneNumbers.map((phone, index) => (
                        <motion.div 
                          key={phone.title}
                          className="border-l-2 border-warm-brown/20 pl-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h4 className="font-medium text-charcoal-black text-sm">{phone.title}</h4>
                          <p className="text-warm-brown font-medium">{phone.number}</p>
                          <p className="text-xs text-medium-grey">{phone.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* Email Addresses */}
                <ScrollAnimation animation="slideRight" delay={0.3}>
                  <motion.div 
                    className="bg-white rounded-2xl p-6 soft-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-warm-brown mr-3" />
                      <h3 className="text-lg font-medium text-charcoal-black">Email Addresses</h3>
                    </div>
                    <div className="space-y-3">
                      {emailAddresses.map((email, index) => (
                        <motion.div 
                          key={email.title}
                          className="border-l-2 border-warm-brown/20 pl-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h4 className="font-medium text-charcoal-black text-sm">{email.title}</h4>
                          <p className="text-warm-brown text-sm">{email.email}</p>
                          <p className="text-xs text-medium-grey">{email.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* Business Hours */}
                <ScrollAnimation animation="slideRight" delay={0.4}>
                  <motion.div 
                    className="bg-white rounded-2xl p-6 soft-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-warm-brown mr-3" />
                      <h3 className="text-lg font-medium text-charcoal-black">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-medium-grey">Monday - Friday</span>
                        <span className="text-charcoal-black font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-medium-grey">Saturday</span>
                        <span className="text-charcoal-black font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-medium-grey">Sunday</span>
                        <span className="text-charcoal-black font-medium">Closed</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-light-grey">
                        <p className="text-xs text-medium-grey">Time Zone: Eastern Standard Time (EST)</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>

              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 bg-white relative overflow-hidden">
          {/* Additional background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-16 left-8 w-28 h-28 bg-warm-brown/4 rounded-full"
              animate={{ 
                y: [0, -30, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-12 w-22 h-22 bg-warm-brown/7 rounded-full"
              animate={{ 
                rotate: [0, -360],
                x: [0, -15, 0]
              }}
              transition={{ 
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/3 w-12 h-12 bg-warm-brown/6 rounded-full"
              animate={{ 
                y: [0, 25, 0],
                x: [0, 20, 0]
              }}
              transition={{ 
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-warm-brown/5 rounded-full"
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <ScrollAnimation animation="fadeUp" className="text-center mb-16">
              <h2 className="text-4xl font-light text-charcoal-black mb-6">Why Choose Morbido?</h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Experience unparalleled service and quality with our dedicated team of furniture experts.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={feature.title} animation="fadeUp" delay={index * 0.1}>
                  <motion.div 
                    className="text-center p-6 rounded-2xl hover:bg-soft-cream transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-8 h-8 text-warm-brown" />
                    </motion.div>
                    <h3 className="text-lg font-medium text-charcoal-black mb-3">{feature.title}</h3>
                    <p className="text-medium-grey">{feature.description}</p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-warm-brown text-white">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fadeUp">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life. Our team is ready to help you create the perfect space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-warm-brown rounded-full font-medium hover:bg-soft-cream transition-all duration-300 soft-shadow"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-warm-brown transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Collections
                </motion.button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
