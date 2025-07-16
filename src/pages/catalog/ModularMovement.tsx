
import React from 'react';
import Header from '../../components/Header';

const ModularMovement = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-6">
            Modular Movement
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Adaptable design for evolving spaces. Mix, match, and reconfigure with our 
            innovative modular system that grows with your lifestyle.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-light-grey rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-medium-grey/15 to-warm-brown/15" />
                </div>
                <h3 className="text-xl font-medium text-charcoal-black mb-2">
                  Modular Unit {item}
                </h3>
                <p className="text-medium-grey mb-4">
                  Flexible design for changing needs
                </p>
                <p className="text-2xl font-light text-warm-brown">
                  ${(399 + item * 60).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModularMovement;
