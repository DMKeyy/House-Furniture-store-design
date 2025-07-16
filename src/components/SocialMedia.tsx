
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      followers: '125K',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: '#',
      followers: '89K',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: '#',
      followers: '67K',
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      href: '#',
      followers: '45K',
      color: 'hover:text-red-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      followers: '23K',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-charcoal-black mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Stay connected and discover the latest in luxury furniture design and home inspiration
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`group flex flex-col items-center p-6 rounded-2xl glass-effect soft-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${social.color}`}
            >
              <div className="w-16 h-16 bg-light-grey rounded-full flex items-center justify-center mb-4 group-hover:bg-warm-brown transition-colors duration-300">
                <social.icon className="w-8 h-8 text-medium-grey group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-lg font-medium text-charcoal-black mb-1">
                {social.name}
              </div>
              <div className="text-sm text-medium-grey">
                {social.followers} followers
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-medium-grey mb-6">
            Join our community and be the first to know about new collections and exclusive offers
          </p>
          <button className="px-8 py-4 bg-warm-brown text-white rounded-full hover:bg-charcoal-black transition-all duration-300 soft-shadow">
            Follow All Channels
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
