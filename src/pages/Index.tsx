
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CollectionGrid from '../components/CollectionGrid';
import Stats from '../components/Stats';
import BrandStory from '../components/BrandStory';
import SocialMedia from '../components/SocialMedia';
import ScrollAnimation from '../components/ScrollAnimations';
import Footer from '../components/Footer';
import { 
  Star,
  Quote,
  User,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Interior Designer",
      content: "Working with Morbido has been an absolute pleasure. Their response time is incredible and the quality of service is unmatched.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen",
      role: "Homeowner",
      content: "The team helped me design my entire living space. The consultation process was thorough and the final result exceeded expectations.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Emma Davis",
      role: "Architect",
      content: "Morbido's customer service is exceptional. They understand design needs and always deliver exactly what we envision.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const faqData = [
    {
      question: "What is your typical response time for inquiries?",
      answer: "We respond to all general inquiries within 24 hours during business days. For urgent matters, we recommend calling our direct line for immediate assistance."
    },
    {
      question: "Do you offer design consultations?",
      answer: "Yes! We offer both virtual and in-person design consultations. Our expert team can help you create the perfect space tailored to your needs and style preferences."
    },
    {
      question: "What are your shipping and delivery options?",
      answer: "We offer various shipping options including standard delivery, white-glove service, and express shipping. Delivery times vary by location and product availability."
    },
    {
      question: "Can I schedule a showroom visit?",
      answer: "Absolutely! We encourage showroom visits to experience our furniture firsthand. You can schedule an appointment online or call us directly to arrange a visit."
    },
    {
      question: "Do you work with interior designers and architects?",
      answer: "Yes, we have a dedicated trade program for interior designers, architects, and other professionals. Contact our design team for special pricing and services."
    }
  ];

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div 
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
          className="absolute bottom-32 left-10 w-24 h-24 bg-warm-brown/10 rounded-full"
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
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-warm-brown/5 rounded-full"
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
          className="absolute top-3/4 left-1/3 w-20 h-20 bg-warm-brown/7 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <Header />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <CollectionGrid />
      </motion.div>
      <Stats />
      <BrandStory />

      {/* Customer Testimonials */}
      <section className="py-20 px-6 bg-soft-cream relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-24 right-20 w-24 h-24 bg-warm-brown/6 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-16 left-16 w-20 h-20 bg-warm-brown/8 rounded-full"
            animate={{ 
              rotate: [0, 360],
              y: [0, 15, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/5 w-14 h-14 bg-warm-brown/4 rounded-full"
            animate={{ 
              x: [0, 25, 0],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-warm-brown/7 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-light text-charcoal-black mb-6">What Our Customers Say</h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about our service.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} animation="scale" delay={index * 0.2}>
                <motion.div 
                  className="bg-white rounded-2xl p-8 soft-shadow relative"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-8 h-8 text-warm-brown/30 absolute top-6 right-6" />
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-warm-brown" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-black">{testimonial.name}</h4>
                      <p className="text-sm text-medium-grey">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warm-brown text-warm-brown" />
                    ))}
                  </div>

                  <p className="text-medium-grey italic leading-relaxed">{testimonial.content}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-12 w-26 h-26 bg-warm-brown/5 rounded-full"
            animate={{ 
              y: [0, -35, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-24 right-16 w-30 h-30 bg-warm-brown/6 rounded-full"
            animate={{ 
              x: [0, -25, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-10 w-16 h-16 bg-warm-brown/4 rounded-full"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-2/3 left-8 w-12 h-12 bg-warm-brown/7 rounded-full"
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.6, 1]
            }}
            transition={{ 
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-light text-charcoal-black mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-medium-grey">
              Find quick answers to common questions about our services and processes.
            </p>
          </ScrollAnimation>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                <motion.div 
                  className="bg-soft-cream rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-warm-brown/5 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                    whileTap={{ scale: 0.995 }}
                  >
                    <span className="text-lg font-medium text-charcoal-black pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-warm-brown flex-shrink-0" />
                    </motion.div>
                  </motion.button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-medium-grey leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <SocialMedia />
      <Footer />
    </motion.div>
  );
};

export default Index;
