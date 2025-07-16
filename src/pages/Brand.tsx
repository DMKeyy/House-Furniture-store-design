
import React from 'react';
import Header from '../components/Header';

const Brand = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            The Morbido Story
          </h1>
          <p className="text-2xl text-medium-grey font-light leading-relaxed">
            Founded on the belief that furniture should be more than functional—it should be transformative.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-light text-charcoal-black mb-6">Our Philosophy</h2>
              <p className="text-lg text-medium-grey leading-relaxed mb-6">
                At Morbido, we believe that exceptional furniture isn't just about aesthetics or function—it's about creating spaces that nurture the soul. Each piece is thoughtfully designed to bring warmth, comfort, and beauty into your daily life.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                Our name, derived from the Italian word for "soft," reflects our commitment to creating furniture that feels as good as it looks. Every curve, every texture, every detail is considered with your comfort in mind.
              </p>
            </div>
            <div className="aspect-[4/3] bg-light-grey rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-warm-brown/20 to-medium-grey/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="aspect-[4/3] bg-light-grey rounded-2xl overflow-hidden lg:order-first">
              <div className="w-full h-full bg-gradient-to-br from-soft-cream/60 to-warm-brown/20" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-charcoal-black mb-6">Our Craft</h2>
              <p className="text-lg text-medium-grey leading-relaxed mb-6">
                Every Morbido piece is crafted with meticulous attention to detail. We partner with skilled artisans who share our passion for quality, using sustainable materials and time-honored techniques passed down through generations.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                From the selection of premium woods to the final hand-applied finish, each step in our process is designed to create furniture that will be treasured for years to come.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-light text-charcoal-black mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-warm-brown rounded-full" />
                </div>
                <h3 className="text-xl font-medium text-charcoal-black mb-2">Sustainability</h3>
                <p className="text-medium-grey">Responsible sourcing and eco-friendly practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-warm-brown rounded-full" />
                </div>
                <h3 className="text-xl font-medium text-charcoal-black mb-2">Quality</h3>
                <p className="text-medium-grey">Uncompromising standards in every detail</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-warm-brown rounded-full" />
                </div>
                <h3 className="text-xl font-medium text-charcoal-black mb-2">Comfort</h3>
                <p className="text-medium-grey">Designs that embrace and nurture</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
