
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Catalog',
      href: '/catalog',
      dropdown: [
        { name: 'Modern & Minimal', href: '/catalog/modern-minimal' },
        { name: 'Wabi Harmony', href: '/catalog/wabi-harmony' },
        { name: 'Nordic Calm', href: '/catalog/nordic-calm' },
        { name: 'Urban Edge', href: '/catalog/urban-edge' },
        { name: 'Elegant Home', href: '/catalog/elegant-home' },
        { name: 'Modular Movement', href: '/catalog/modular-movement' },
        { name: 'Coastal Breeze', href: '/catalog/coastal-breeze' },
        { name: 'Vintage Revival', href: '/catalog/vintage-revival' }
      ]
    },
    { label: 'The Brand', href: '/brand' },
    { label: 'Custom Production', href: '/custom' },
    { label: 'Imports', href: '/imports' },
    {
      label: 'Collections',
      href: '/collections',
      dropdown: [
        { name: 'Modern & Minimal', href: '/catalog/modern-minimal' },
        { name: 'Wabi Harmony', href: '/catalog/wabi-harmony' },
        { name: 'Nordic Calm', href: '/catalog/nordic-calm' },
        { name: 'Urban Edge', href: '/catalog/urban-edge' },
        { name: 'Elegant Home', href: '/catalog/elegant-home' },
        { name: 'Modular Movement', href: '/catalog/modular-movement' },
        { name: 'Coastal Breeze', href: '/catalog/coastal-breeze' },
        { name: 'Vintage Revival', href: '/catalog/vintage-revival' }
      ]
    },
    {
      label: 'Blog',
      href: '/blog',
      dropdown: [
        { name: 'Useful Tips', href: '/blog/useful-tips' },
        { name: 'Interesting Articles', href: '/blog/interesting-articles' },
        { name: 'New Products', href: '/blog/new-products' },
        { name: 'Updates', href: '/blog/updates' }
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
      dropdown: [
        { name: 'Phone Number', href: '/contact/phone' },
        { name: 'Email Address', href: '/contact/email' },
        { name: 'Contact Form', href: '/contact/form' }
      ]
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="relative z-50" ref={dropdownRef}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-2">
        {navigationItems.map((item) => (
          <div key={item.label} className="relative">
            {item.dropdown ? (
              <button
                className={`flex items-center space-x-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white/20 text-charcoal-black hover:bg-warm-brown hover:text-white transition-all duration-300 soft-shadow ${
                  activeDropdown === item.label ? 'bg-warm-brown text-white' : ''
                }`}
                onClick={() => handleDropdownToggle(item.label)}
              >
                <span className="font-medium text-sm">{item.label}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} 
                />
              </button>
            ) : (
              <Link
                to={item.href}
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white/20 text-charcoal-black hover:bg-warm-brown hover:text-white transition-all duration-300 soft-shadow"
              >
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            )}

            {/* Desktop Dropdown */}
            {item.dropdown && activeDropdown === item.label && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 soft-shadow p-4 animate-fade-in">
                <div className="grid gap-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-4 py-3 text-sm text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200"
                      onClick={handleDropdownItemClick}
                    >
                      {subItem.name}
                    </Link>
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
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-medium-grey hover:text-warm-brown transition-colors duration-200"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
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
