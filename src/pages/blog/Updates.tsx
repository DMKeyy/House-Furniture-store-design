
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Updates = () => {
  const updates = [
    {
      title: "New Showroom Opening in Milano",
      excerpt: "We're excited to announce the opening of our flagship showroom in the heart of Milano's design district.",
      date: "March 28, 2024",
      type: "Company News"
    },
    {
      title: "Sustainability Certification Achieved",
      excerpt: "Morbido has received the highest sustainability certification for our manufacturing processes and material sourcing.",
      date: "March 25, 2024",
      type: "Company News"
    },
    {
      title: "Partnership with Local Artisans",
      excerpt: "Announcing our new collaboration with local craftsmen to create exclusive limited-edition pieces.",
      date: "March 20, 2024",
      type: "Partnership"
    },
    {
      title: "Customer Service Expansion",
      excerpt: "We've expanded our customer service team and extended support hours to better serve our global customers.",
      date: "March 15, 2024",
      type: "Service Update"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-soft-cream relative">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-28 right-20 w-34 h-34 bg-warm-brown/4 rounded-full"
          animate={{ 
            y: [0, -24, 0],
            scale: [1, 1.18, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-8 w-22 h-22 bg-warm-brown/7 rounded-full"
          animate={{ 
            y: [0, 18, 0],
            x: [0, -14, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-warm-brown/6 rounded-full"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Updates
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Stay informed about the latest news, developments, and exciting changes at Morbido.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {updates.map((update, index) => (
              <article key={index} className="bg-pure-white rounded-2xl p-8 soft-shadow hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-warm-brown/10 text-warm-brown px-3 py-1 rounded-full text-sm font-medium">
                        {update.type}
                      </span>
                      <time className="text-sm text-medium-grey">{update.date}</time>
                    </div>
                    <h2 className="text-2xl font-medium text-charcoal-black mb-4">{update.title}</h2>
                    <p className="text-lg text-medium-grey leading-relaxed">{update.excerpt}</p>
                  </div>
                  <div className="w-full lg:w-48 aspect-video bg-light-grey rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-medium-grey/15 to-warm-brown/20" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Updates;
