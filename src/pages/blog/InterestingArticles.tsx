
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const InterestingArticles = () => {
  const articles = [
    {
      title: "The Psychology of Color in Interior Design",
      excerpt: "Discover how different colors affect mood and atmosphere, and learn to use color psychology in your home.",
      date: "March 20, 2024"
    },
    {
      title: "Sustainable Furniture: A Growing Movement",
      excerpt: "Exploring the rise of eco-friendly furniture and how sustainable practices are shaping the industry.",
      date: "March 18, 2024"
    },
    {
      title: "The Art of Slow Living Through Design",
      excerpt: "How thoughtful furniture choices can help create a more mindful, peaceful living environment.",
      date: "March 12, 2024"
    },
    {
      title: "From Bauhaus to Modern: A Design Journey",
      excerpt: "Tracing the evolution of furniture design from the influential Bauhaus movement to contemporary styles.",
      date: "March 8, 2024"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-soft-cream relative">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-32 right-16 w-30 h-30 bg-warm-brown/6 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-28 left-10 w-24 h-24 bg-warm-brown/7 rounded-full"
          animate={{ 
            y: [0, 14, 0],
            x: [0, -8, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-18 h-18 bg-warm-brown/5 rounded-full"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Interesting Articles
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Thought-provoking insights into design, culture, and the role furniture plays in our daily lives.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {articles.map((article, index) => (
              <article key={index} className="bg-pure-white rounded-2xl p-8 soft-shadow hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium text-charcoal-black mb-4">{article.title}</h2>
                    <p className="text-lg text-medium-grey leading-relaxed mb-4">{article.excerpt}</p>
                    <time className="text-sm text-warm-brown font-medium">{article.date}</time>
                  </div>
                  <div className="w-full lg:w-48 aspect-video bg-light-grey rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-charcoal-black/15 to-warm-brown/20" />
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

export default InterestingArticles;
