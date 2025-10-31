
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationItems: any = [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'The Brand', href: '/brand' },
    // Blog removed
    { label: 'Contact', href: '/contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.nav 
      className="relative z-50"
      ref={dropdownRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-2">
        {navigationItems.map((item, index) => (
          <motion.div 
            key={item.label} 
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            {item.dropdown ? (
              <motion.button
                className={`flex items-center space-x-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 soft-shadow group ${
                  isScrolled 
                    ? 'bg-white/95 border-white/30 text-charcoal-black hover:bg-warm-brown hover:text-white' 
                    : 'bg-white/80 border-white/20 text-charcoal-black hover:bg-warm-brown hover:text-white'
                } ${
                  activeDropdown === item.label ? 'bg-warm-brown text-white scale-105' : ''
                }`}
                onClick={() => handleDropdownToggle(item.label)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium text-sm">{item.label}</span>
                <motion.div
                  animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 soft-shadow ${
                    isScrolled 
                      ? 'bg-white/95 border-white/30 text-charcoal-black hover:bg-warm-brown hover:text-white' 
                      : 'bg-white/80 border-white/20 text-charcoal-black hover:bg-warm-brown hover:text-white'
                  }`}
                >
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              </motion.div>
            )}

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {item.dropdown && activeDropdown === item.label && (
                <motion.div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 soft-shadow p-4 overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="grid gap-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <motion.div
                        key={subItem.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: subIndex * 0.05 }}
                      >
                        <Link
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200"
                          onClick={handleDropdownItemClick}
                        >
                          {subItem.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden">
        <motion.button
          className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md border soft-shadow ${
            isScrolled 
              ? 'bg-white/95 border-white/30' 
              : 'bg-white/80 border-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-charcoal-black" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-charcoal-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden absolute top-full right-0 mt-4 w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 soft-shadow p-6 overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <>
                      <motion.button
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200"
                        onClick={() => handleDropdownToggle(item.label)}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="font-medium">{item.label}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div 
                            className="ml-4 mt-2 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                              >
                                <Link
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-medium-grey hover:text-warm-brown transition-colors duration-200"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-charcoal-black hover:bg-warm-brown/10 hover:text-warm-brown rounded-xl transition-all duration-200 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
