
import React, { useState } from 'react';
import Header from '../../components/Header';
import { Button } from '../../components/ui/button';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Contact Form
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Send us a detailed message and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-pure-white rounded-3xl p-8 md:p-12 soft-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-brown focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-brown focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-light-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-brown focus:border-transparent transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal-black mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-light-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-brown focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="custom">Custom Design</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-light-grey rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-brown focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us about your project, questions, or how we can help you..."
                />
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit"
                  className="bg-warm-brown hover:bg-warm-brown/90 text-white px-8 py-4 text-lg rounded-full inline-flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-medium-grey mb-4">
              Prefer to reach out directly? We're also available via:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15551234567" className="text-warm-brown hover:underline">
                Phone: +1 (555) 123-4567
              </a>
              <a href="mailto:hello@morbido.com" className="text-warm-brown hover:underline">
                Email: hello@morbido.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
