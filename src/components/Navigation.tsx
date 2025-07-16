
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Catalog',
      href: '/catalog',
      dropdown: [
        'Modern & Minimal',
        'Wabi Harmony',
        'Nordic Calm',
        'Urban Edge',
        'Elegant Home',
        'Modular Movement',
        'Coastal Breeze',
        'Vintage Revival'
      ]
    },
    { label: 'The Brand', href: '/brand' },
    { label: 'Custom Production', href: '/custom' },
    { label: 'Imports', href: '/imports' },
    {
      label: 'Collections',
      href: '/collections',
      dropdown: [
        'Modern & Minimal',
        'Wabi Harmony',
        'Nordic Calm',
        'Urban Edge',
        'Elegant Home',
        'Modular Movement',
        'Coastal Breeze',
        'Vintage Revival'
      ]
    },
    {
      label: 'Blog',
      href: '/blog',
      dropdown: [
        'Useful Tips',
        'Interesting Articles',
        'New Products',
        'Updates'
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
      dropdown: [
        'Phone Number',
        'Email Address',
        'Contact Form'
      ]
    }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-2">
        {navigationItems.map((item) => (
          <div key={item.label} className="relative group">
            <button
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white/20 text-charcoal-black hover:bg-warm-brown hover:text-white transition-all duration-300 soft-shadow"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="font-medium text-sm">{item.label}</span>
              {item.dropdown && (
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              )}
            </button>

            {/* Mega Menu Dropdown */}
            {item.dropdown && activeDropdown === item.label && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 soft-shadow p-4 animate-fade-in"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="grid gap-2">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-3 text-sm text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden">
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-white/20 soft-shadow"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-charcoal-black" />
          ) : (
            <Menu className="w-6 h-6 text-charcoal-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 mt-4 w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 soft-shadow p-6 animate-fade-in">
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-left text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200"
                  onClick={() => item.dropdown && handleDropdownToggle(item.label)}
                >
                  <span className="font-medium">{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {item.dropdown && activeDropdown === item.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-medium-grey hover:text-warm-brown transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
