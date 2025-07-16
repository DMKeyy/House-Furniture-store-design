
import React from 'react';

const BrandStory = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-light text-charcoal-black mb-6 tracking-tight">
                The Art of 
                <span className="block text-warm-brown">Comfortable Living</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                At Morbido, we believe that furniture should be more than just functional pieces. 
                Each item in our collection is thoughtfully designed to create spaces that nurture 
                the soul and inspire daily living.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-warm-brown font-semibold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-black mb-2">Artisan Craftsmanship</h3>
                  <p className="text-medium-grey leading-relaxed">
                    Every piece is meticulously crafted by skilled artisans using premium materials and time-honored techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-warm-brown font-semibold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-black mb-2">Sustainable Design</h3>
                  <p className="text-medium-grey leading-relaxed">
                    We source responsibly and create furniture that stands the test of time, reducing environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-warm-brown font-semibold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-black mb-2">Custom Solutions</h3>
                  <p className="text-medium-grey leading-relaxed">
                    From bespoke pieces to personalized collections, we bring your unique vision to life.
                  </p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow">
              <span className="font-medium">Learn More About Us</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden soft-shadow">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800"
                alt="Morbido craftsmanship"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-6 soft-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-brown mb-1">15+</div>
                <div className="text-sm text-medium-grey">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
