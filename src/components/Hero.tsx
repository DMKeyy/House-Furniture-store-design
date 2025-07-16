
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(241, 238, 237, 0.4), rgba(98, 80, 67, 0.3)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Large Logo */}
        <h1 className="text-8xl lg:text-9xl font-bold text-charcoal-black mb-6 tracking-tight">
          Morbido
        </h1>
        
        {/* Slogan */}
        <p className="text-2xl lg:text-3xl text-medium-grey mb-12 font-light leading-relaxed max-w-3xl mx-auto">
          Where comfort meets elegance
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group flex items-center space-x-3 px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow">
            <span className="font-medium">Explore Collections</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="px-8 py-4 bg-white/80 backdrop-blur-md text-charcoal-black rounded-full hover:bg-white transition-all duration-300 soft-shadow border border-white/20">
            <span className="font-medium">Custom Design</span>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
