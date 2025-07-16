
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CollectionGrid from '../components/CollectionGrid';
import BrandStory from '../components/BrandStory';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CollectionGrid />
      <BrandStory />
    </div>
  );
};

export default Index;
