
import React from 'react';
import Header from '../../components/Header';
import { Phone, Clock, Globe } from 'lucide-react';

const PhoneNumber = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Call Us
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Speak directly with our design consultants and customer service team.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-pure-white rounded-2xl p-8 soft-shadow text-center">
              <Phone className="w-12 h-12 text-warm-brown mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-charcoal-black mb-4">Sales & Design</h3>
              <p className="text-3xl font-light text-warm-brown mb-4">+1 (555) 123-4567</p>
              <p className="text-medium-grey">
                For product inquiries, design consultations, and custom orders
              </p>
            </div>
            
            <div className="bg-pure-white rounded-2xl p-8 soft-shadow text-center">
              <Phone className="w-12 h-12 text-warm-brown mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-charcoal-black mb-4">Customer Support</h3>
              <p className="text-3xl font-light text-warm-brown mb-4">+1 (555) 123-4568</p>
              <p className="text-medium-grey">
                For existing orders, delivery, and after-sales support
              </p>
            </div>
          </div>

          <div className="bg-pure-white rounded-2xl p-8 soft-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-warm-brown mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-charcoal-black mb-2">Business Hours</h4>
                  <div className="space-y-1 text-medium-grey">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 12:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-warm-brown mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-charcoal-black mb-2">Time Zone</h4>
                  <p className="text-medium-grey">Eastern Standard Time (EST)</p>
                  <p className="text-sm text-medium-grey mt-2">
                    International customers, please consider the time difference when calling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneNumber;
