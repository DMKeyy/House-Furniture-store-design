
import React from 'react';
import Header from '../components/Header';
import { Button } from '../components/ui/button';

const CustomProduction = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Custom Production
          </h1>
          <p className="text-2xl text-medium-grey font-light leading-relaxed">
            Bring your vision to life with our bespoke furniture service.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-light text-charcoal-black mb-6">Your Vision, Our Craft</h2>
              <p className="text-lg text-medium-grey leading-relaxed mb-6">
                Have a specific piece in mind? Our custom production service allows you to create furniture that's perfectly tailored to your space, style, and needs. From initial concept to final delivery, we work closely with you every step of the way.
              </p>
              <ul className="space-y-4 text-medium-grey">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-warm-brown rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span>Personal design consultation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-warm-brown rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span>Custom dimensions and materials</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-warm-brown rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span>Expert craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-warm-brown rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span>White-glove delivery and installation</span>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] bg-light-grey rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-warm-brown/30 to-charcoal-black/10" />
            </div>
          </div>

          <div className="bg-pure-white rounded-3xl p-12 soft-shadow">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-light text-charcoal-black mb-6">Start Your Custom Project</h3>
              <p className="text-lg text-medium-grey mb-8">
                Ready to create something extraordinary? Get in touch with our design team to discuss your custom furniture project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-warm-brown hover:bg-warm-brown/90 text-white px-8 py-6 text-lg rounded-full">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white px-8 py-6 text-lg rounded-full">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomProduction;
