
import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-charcoal-black tracking-tight">
            Morbido
          </h1>
        </div>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
