
import React from 'react';
import Header from '../../components/Header';
import { Mail, Clock, MessageSquare } from 'lucide-react';

const EmailAddress = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Email Us
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Get in touch with our team via email for detailed inquiries and support.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-pure-white rounded-2xl p-8 soft-shadow text-center">
              <Mail className="w-12 h-12 text-warm-brown mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-charcoal-black mb-4">General Inquiries</h3>
              <p className="text-xl text-warm-brown mb-4">hello@morbido.com</p>
              <p className="text-medium-grey">
                For general questions, product information, and business inquiries
              </p>
            </div>
            
            <div className="bg-pure-white rounded-2xl p-8 soft-shadow text-center">
              <Mail className="w-12 h-12 text-warm-brown mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-charcoal-black mb-4">Customer Support</h3>
              <p className="text-xl text-warm-brown mb-4">support@morbido.com</p>
              <p className="text-medium-grey">
                For order status, delivery updates, and after-sales support
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-pure-white rounded-2xl p-8 soft-shadow text-center">
              <Mail className="w-12 h-12 text-warm-brown mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-charcoal-black mb-4">Design Consultation</h3>
              <p className="text-xl text-warm-brown mb-4">design@morbido.com</p>
              <p className="text-medium-grey">
                For custom projects and professional design services
              </p>
            </div>
            
            <div className="bg-pure-white rounded-2xl p-8 soft-shadow text-center">
              <Mail className="w-12 h-12 text-warm-brown mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-charcoal-black mb-4">Press & Media</h3>
              <p className="text-xl text-warm-brown mb-4">press@morbido.com</p>
              <p className="text-medium-grey">
                For media inquiries and press-related questions
              </p>
            </div>
          </div>

          <div className="bg-pure-white rounded-2xl p-8 soft-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-warm-brown mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-charcoal-black mb-2">Response Time</h4>
                  <div className="space-y-1 text-medium-grey">
                    <p>General inquiries: Within 24 hours</p>
                    <p>Support requests: Within 12 hours</p>
                    <p>Design consultations: Within 48 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-6 h-6 text-warm-brown mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-charcoal-black mb-2">Email Tips</h4>
                  <div className="space-y-1 text-medium-grey text-sm">
                    <p>Include your order number for support requests</p>
                    <p>Attach photos for design consultations</p>
                    <p>Be specific about your requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailAddress;
