
import React from 'react';
import { Users, Package, Award, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '12,000+',
      label: 'Satisfied Clients',
      description: 'Happy customers worldwide'
    },
    {
      icon: Package,
      number: '45,000+',
      label: 'Orders Completed',
      description: 'Premium furniture delivered'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Design Awards',
      description: 'International recognition'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Served',
      description: 'Global presence'
    }
  ];

  return (
    <section className="py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-charcoal-black mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Our commitment to quality and design excellence has earned us the trust of clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="glass-effect rounded-2xl p-8 soft-shadow hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal-black transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-light text-charcoal-black mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-warm-brown mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-medium-grey">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
