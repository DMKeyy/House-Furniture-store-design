
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CollectionGrid = () => {
  const collections = [
    {
      name: 'Modern & Minimal',
      description: 'Clean lines and timeless elegance',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600',
      featured: true
    },
    {
      name: 'Wabi Harmony',
      description: 'Embracing imperfection and natural beauty',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600',
      featured: false
    },
    {
      name: 'Nordic Calm',
      description: 'Scandinavian simplicity meets comfort',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600',
      featured: false
    },
    {
      name: 'Urban Edge',
      description: 'Contemporary design for modern living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600',
      featured: false
    },
    {
      name: 'Elegant Home',
      description: 'Sophisticated pieces for refined spaces',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600',
      featured: false
    },
    {
      name: 'Coastal Breeze',
      description: 'Light, airy designs inspired by the sea',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600',
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-soft-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-charcoal-black mb-6 tracking-tight">
            Our Collections
          </h2>
          <p className="text-lg text-medium-grey max-w-2xl mx-auto leading-relaxed">
            Discover carefully curated furniture collections that blend comfort, style, and functionality
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className={`group relative overflow-hidden rounded-3xl soft-shadow hover:scale-105 transition-all duration-500 cursor-pointer ${
                collection.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-effect rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal-black mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-medium-grey text-sm leading-relaxed">
                        {collection.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-warm-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group flex items-center space-x-3 px-8 py-4 bg-white text-charcoal-black rounded-full hover:bg-warm-brown hover:text-white transition-all duration-300 soft-shadow mx-auto">
            <span className="font-medium">View All Collections</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
