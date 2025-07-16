
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CollectionGrid from '../components/CollectionGrid';
import Stats from '../components/Stats';
import BrandStory from '../components/BrandStory';
import SocialMedia from '../components/SocialMedia';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CollectionGrid />
      <Stats />
      <BrandStory />
      <SocialMedia />
    </div>
  );
};

export default Index;
