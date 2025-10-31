import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, ChevronDown, X, Star, Heart, Share2, ShoppingCart } from 'lucide-react';
import Header from '../components/Header';
import ScrollAnimation from '../components/ScrollAnimations';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

// Product type for strong typing and lint compliance
type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  type: string;
  image: string;
};

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const collectionsRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (collectionsRef.current && !collectionsRef.current.contains(event.target as Node)) {
        setIsCollectionsOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key to close details panel
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDetailsOpen) {
        setIsDetailsOpen(false);
        setSelectedProduct(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDetailsOpen]);

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
  };

  const closeProductDetails = () => {
    setIsDetailsOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const categories = [
    { id: 'all', name: 'All Collections', count: 48 },
    { id: 'modern-minimal', name: 'Modern & Minimal', count: 6 },
    { id: 'wabi-harmony', name: 'Wabi Harmony', count: 6 },
    { id: 'nordic-calm', name: 'Nordic Calm', count: 6 },
    { id: 'urban-edge', name: 'Urban Edge', count: 6 },
    { id: 'elegant-home', name: 'Elegant Home', count: 6 },
    { id: 'modular-movement', name: 'Modular Movement', count: 6 },
    { id: 'coastal-breeze', name: 'Coastal Breeze', count: 6 },
    { id: 'vintage-revival', name: 'Vintage Revival', count: 6 }
  ];

  const products = useMemo<Product[]>(() => [
    // Modern & Minimal
    { id: 1, name: "Minimal Chair Alpha", category: "modern-minimal", description: "Clean geometric forms meet comfort", price: 349, type: "chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Minimal Chair Beta", category: "modern-minimal", description: "Sleek design for modern spaces", price: 399, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Minimal Chair Gamma", category: "modern-minimal", description: "Ergonomic minimalism", price: 449, type: "chair", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Minimal Table One", category: "modern-minimal", description: "Functional simplicity", price: 599, type: "table", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Minimal Table Two", category: "modern-minimal", description: "Contemporary elegance", price: 649, type: "table", image: "https://images.unsplash.com/photo-1562113530-57ba9c67b7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Minimal Sofa Set", category: "modern-minimal", description: "Luxurious comfort minimally designed", price: 1299, type: "sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Wabi Harmony
    { id: 7, name: "Harmony Table One", category: "wabi-harmony", description: "Natural textures and organic forms", price: 499, type: "table", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Harmony Table Two", category: "wabi-harmony", description: "Embracing natural imperfections", price: 574, type: "table", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 9, name: "Harmony Table Three", category: "wabi-harmony", description: "Rustic elegance meets function", price: 649, type: "table", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 10, name: "Harmony Table Four", category: "wabi-harmony", description: "Weathered beauty in furniture", price: 724, type: "table", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 11, name: "Harmony Table Five", category: "wabi-harmony", description: "Timeless Japanese-inspired design", price: 799, type: "table", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 12, name: "Harmony Table Six", category: "wabi-harmony", description: "Perfect imperfection in wood", price: 874, type: "table", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Nordic Calm
    { id: 13, name: "Nordic Chair Alpha", category: "nordic-calm", description: "Scandinavian simplicity and warmth", price: 425, type: "chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 14, name: "Nordic Chair Beta", category: "nordic-calm", description: "Light wood meets comfort", price: 475, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 15, name: "Nordic Table One", category: "nordic-calm", description: "Clean lines, natural materials", price: 699, type: "table", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 16, name: "Nordic Table Two", category: "nordic-calm", description: "Hygge-inspired dining", price: 799, type: "table", image: "https://images.unsplash.com/photo-1562113530-57ba9c67b7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 17, name: "Nordic Sofa Set", category: "nordic-calm", description: "Cozy comfort for long winters", price: 1499, type: "sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 18, name: "Nordic Bookshelf", category: "nordic-calm", description: "Functional beauty for your books", price: 549, type: "storage", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Urban Edge
    { id: 19, name: "Urban Steel Chair", category: "urban-edge", description: "Industrial strength meets style", price: 379, type: "chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 20, name: "Urban Concrete Table", category: "urban-edge", description: "Raw materials, refined design", price: 899, type: "table", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 21, name: "Urban Loft Sofa", category: "urban-edge", description: "Metropolitan comfort", price: 1699, type: "sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 22, name: "Urban Steel Shelf", category: "urban-edge", description: "Industrial storage solution", price: 449, type: "storage", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 23, name: "Urban Bench", category: "urban-edge", description: "Minimalist seating with edge", price: 329, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 24, name: "Urban Desk", category: "urban-edge", description: "Workspace with character", price: 749, type: "table", image: "https://images.unsplash.com/photo-1562113530-57ba9c67b7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Elegant Home
    { id: 25, name: "Elegant Dining Chair", category: "elegant-home", description: "Sophisticated dining experience", price: 549, type: "chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 26, name: "Elegant Console Table", category: "elegant-home", description: "Refined elegance for your entrance", price: 899, type: "table", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 27, name: "Elegant Chesterfield", category: "elegant-home", description: "Timeless luxury seating", price: 1899, type: "sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 28, name: "Elegant Armoire", category: "elegant-home", description: "Classic storage with style", price: 1299, type: "storage", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 29, name: "Elegant Side Table", category: "elegant-home", description: "Perfect accent piece", price: 399, type: "table", image: "https://images.unsplash.com/photo-1562113530-57ba9c67b7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 30, name: "Elegant Ottoman", category: "elegant-home", description: "Luxurious comfort and function", price: 449, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Modular Movement
    { id: 31, name: "Modular Seating Alpha", category: "modular-movement", description: "Adaptable comfort for any space", price: 699, type: "sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 32, name: "Modular Seating Beta", category: "modular-movement", description: "Mix and match your way", price: 799, type: "sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 33, name: "Modular Desk System", category: "modular-movement", description: "Expandable workspace solution", price: 899, type: "table", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 34, name: "Modular Storage Unit", category: "modular-movement", description: "Flexible organization system", price: 649, type: "storage", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 35, name: "Modular Table Extension", category: "modular-movement", description: "Growing with your needs", price: 549, type: "table", image: "https://images.unsplash.com/photo-1562113530-57ba9c67b7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 36, name: "Modular Corner Piece", category: "modular-movement", description: "Perfect fit for any corner", price: 399, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Coastal Breeze
    { id: 37, name: "Coastal Bench One", category: "coastal-breeze", description: "Weathered beauty meets coastal comfort", price: 549, type: "chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 38, name: "Coastal Bench Two", category: "coastal-breeze", description: "Ocean-inspired seating", price: 619, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 39, name: "Coastal Bench Three", category: "coastal-breeze", description: "Driftwood elegance", price: 689, type: "chair", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 40, name: "Coastal Bench Four", category: "coastal-breeze", description: "Seaside tranquility", price: 759, type: "chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 41, name: "Coastal Bench Five", category: "coastal-breeze", description: "Nautical charm", price: 829, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 42, name: "Coastal Bench Six", category: "coastal-breeze", description: "Breezy comfort for your home", price: 899, type: "chair", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Vintage Revival
    { id: 43, name: "Vintage Armchair", category: "vintage-revival", description: "Timeless style meets modern comfort", price: 799, type: "chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 44, name: "Vintage Writing Desk", category: "vintage-revival", description: "Classic workspace inspiration", price: 949, type: "table", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 45, name: "Vintage Chaise Lounge", category: "vintage-revival", description: "Elegant relaxation", price: 1199, type: "chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 46, name: "Vintage Bookcase", category: "vintage-revival", description: "Literary elegance for your collection", price: 899, type: "storage", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 47, name: "Vintage Coffee Table", category: "vintage-revival", description: "Conversation starter centerpiece", price: 649, type: "table", image: "https://images.unsplash.com/photo-1562113530-57ba9c67b7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 48, name: "Vintage Bar Cabinet", category: "vintage-revival", description: "Entertaining with vintage flair", price: 1099, type: "storage", image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ], []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, products]);

  const getCategoryDescription = (categoryId: string) => {
    const descriptions = {
      'all': 'Explore our complete collection of modern furniture designed for contemporary living.',
      'modern-minimal': 'Clean lines, functional beauty, and timeless design. Celebrating the power of simplicity.',
      'wabi-harmony': 'Embracing imperfection and natural beauty. Find peace in the perfectly imperfect.',
      'nordic-calm': 'Scandinavian-inspired design focusing on light, warmth, and hygge comfort.',
      'urban-edge': 'Industrial aesthetics meet contemporary comfort. Raw materials, refined design.',
      'elegant-home': 'Sophisticated furniture for the discerning homeowner. Timeless elegance.',
      'modular-movement': 'Adaptable furniture systems that grow and change with your lifestyle.',
      'coastal-breeze': 'Ocean-inspired tranquility. Natural textures and weathered finishes.',
      'vintage-revival': 'Classic designs reimagined for modern living. Timeless style meets contemporary comfort.'
    };
    return descriptions[categoryId] || descriptions['all'];
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-soft-cream relative">
        {/* Background decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-24 right-8 w-36 h-36 bg-warm-brown/4 rounded-full"
            animate={{ 
              y: [0, -25, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-16 w-22 h-22 bg-warm-brown/7 rounded-full"
            animate={{ 
              y: [0, 18, 0],
              x: [0, -12, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/6 w-18 h-18 bg-warm-brown/6 rounded-full"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-3/5 right-1/4 w-26 h-26 bg-warm-brown/5 rounded-full"
            animate={{ 
              y: [0, -8, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <Header />
        
        {/* Filters Section */}
        <section className="pt-32 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="fadeUp">
              <div className="bg-white rounded-3xl p-8 soft-shadow">
                
                {/* Search and View Controls */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-medium-grey w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Collections Dropdown */}
                  <div className="flex gap-2">
                    <div className="relative" ref={collectionsRef}>
                      <button
                        onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                        className="px-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200 min-w-[200px] bg-white text-charcoal-black flex items-center justify-between"
                      >
                        <span>{categories.find(cat => cat.id === selectedCategory)?.name} ({categories.find(cat => cat.id === selectedCategory)?.count})</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCollectionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isCollectionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-light-grey soft-shadow z-50 max-h-60 overflow-y-auto"
                          >
                            {categories.map((category) => (
                              <button
                                key={category.id}
                                onClick={() => {
                                  setSelectedCategory(category.id);
                                  setIsCollectionsOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-warm-brown hover:text-white transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl text-charcoal-black"
                              >
                                {category.name} ({category.count})
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative" ref={sortRef}>
                      <button
                        onClick={() => setIsSortOpen(!isSortOpen)}
                        className="px-4 py-3 rounded-xl border border-light-grey focus:border-warm-brown focus:outline-none transition-colors duration-200 bg-white text-charcoal-black flex items-center justify-between min-w-[160px]"
                      >
                        <span>
                          {sortBy === 'name' ? 'Sort by Name' : 
                           sortBy === 'price-low' ? 'Price: Low to High' : 
                           'Price: High to Low'}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isSortOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-light-grey soft-shadow z-50"
                          >
                            <button
                              onClick={() => { setSortBy('name'); setIsSortOpen(false); }}
                              className="w-full px-4 py-3 text-left hover:bg-warm-brown hover:text-white transition-colors duration-200 rounded-t-xl text-charcoal-black"
                            >
                              Sort by Name
                            </button>
                            <button
                              onClick={() => { setSortBy('price-low'); setIsSortOpen(false); }}
                              className="w-full px-4 py-3 text-left hover:bg-warm-brown hover:text-white transition-colors duration-200 text-charcoal-black"
                            >
                              Price: Low to High
                            </button>
                            <button
                              onClick={() => { setSortBy('price-high'); setIsSortOpen(false); }}
                              className="w-full px-4 py-3 text-left hover:bg-warm-brown hover:text-white transition-colors duration-200 rounded-b-xl text-charcoal-black"
                            >
                              Price: High to Low
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex rounded-xl border border-light-grey overflow-hidden">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 transition-colors duration-200 ${
                          viewMode === 'grid' ? 'bg-warm-brown text-white' : 'bg-white text-medium-grey hover:bg-warm-brown/5'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 transition-colors duration-200 ${
                          viewMode === 'list' ? 'bg-warm-brown text-white' : 'bg-white text-medium-grey hover:bg-warm-brown/5'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-medium-grey">
                  {filteredProducts.length} products found
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${selectedCategory}-${viewMode}`}
                  className={viewMode === 'grid' ? 
                    "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8" :
                    "space-y-6"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      className={viewMode === 'grid' ? 
                        "bg-white rounded-2xl p-4 soft-shadow group cursor-pointer h-full flex flex-col" :
                        "bg-white rounded-2xl p-6 soft-shadow flex gap-6 items-center"
                      }
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: viewMode === 'grid' ? -5 : 0, scale: viewMode === 'grid' ? 1.02 : 1 }}
                    >
                      {viewMode === 'grid' ? (
                        <>
                          <div className="aspect-square bg-light-grey rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <h3 className="text-lg md:text-xl font-medium text-charcoal-black mb-2 truncate">
                            {product.name}
                          </h3>
                          <p className="text-medium-grey mb-4 hidden sm:block">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <p className="text-xl md:text-2xl font-light text-warm-brown">
                              ${product.price.toLocaleString()}
                            </p>
                            <motion.button
                              className="px-3 py-2 bg-warm-brown text-white rounded-full text-xs md:text-sm font-medium hover:bg-charcoal-black transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => openProductDetails(product)}
                            >
                              View Details
                            </motion.button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-24 h-24 bg-light-grey rounded-xl overflow-hidden flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-medium text-charcoal-black mb-2">
                              {product.name}
                            </h3>
                            <p className="text-medium-grey mb-2">
                              {product.description}
                            </p>
                            <p className="text-sm text-warm-brown/70 capitalize">
                              {product.category.replace('-', ' ')} • {product.type}
                            </p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-2xl font-light text-warm-brown mb-3">
                              ${product.price.toLocaleString()}
                            </p>
                            <motion.button
                              className="px-6 py-2 bg-warm-brown text-white rounded-full text-sm font-medium hover:bg-charcoal-black transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => openProductDetails(product)}
                            >
                              View Details
                            </motion.button>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredProducts.length === 0 && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Filter className="w-16 h-16 text-medium-grey mx-auto mb-6" />
                  <h3 className="text-2xl font-light text-charcoal-black mb-4">No products found</h3>
                  <p className="text-medium-grey">Try adjusting your filters or search terms.</p>
                </motion.div>
              )}
          </div>
        </section>

        {/* Product Details Panel */}
        <AnimatePresence>
          {isDetailsOpen && selectedProduct && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-charcoal-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeProductDetails}
              />

              {/* Details Card */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl pointer-events-auto overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* make inner area scrollable while keeping rounded corners clipped by outer container */}
                  <div className="max-h-[90vh] overflow-y-auto">
                    <div className="relative">
                    {/* Close Button */}
                    <button
                      onClick={closeProductDetails}
                      className="absolute top-6 right-6 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 z-10 shadow-lg"
                    >
                      <X className="w-5 h-5 text-charcoal-black" />
                    </button>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Product Image */}
                      <div className="aspect-square bg-light-grey overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-[0px] md:rounded-bl-[0px]">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-8 flex flex-col justify-between md:rounded-r-3xl rounded-b-3xl">
                        {/* Category and Type */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-warm-brown/10 text-warm-brown rounded-full text-sm font-medium capitalize">
                            {selectedProduct.category.replace('-', ' ')}
                          </span>
                          <span className="px-3 py-1 bg-medium-grey/10 text-medium-grey rounded-full text-sm capitalize">
                            {selectedProduct.type}
                          </span>
                        </div>

                        {/* Product Name */}
                        <h2 className="text-3xl font-light text-charcoal-black mb-4">
                          {selectedProduct.name}
                        </h2>

                        {/* Price */}
                        <div className="text-4xl font-light text-warm-brown mb-6">
                          ${selectedProduct.price.toLocaleString()}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-medium-grey leading-relaxed mb-6">
                          {selectedProduct.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h3 className="text-lg font-medium text-charcoal-black mb-3">Features</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-medium-grey">
                              <Star className="w-4 h-4 text-warm-brown mr-2" />
                              Handcrafted by skilled artisans
                            </li>
                            <li className="flex items-center text-medium-grey">
                              <Star className="w-4 h-4 text-warm-brown mr-2" />
                              Sustainable materials
                            </li>
                            <li className="flex items-center text-medium-grey">
                              <Star className="w-4 h-4 text-warm-brown mr-2" />
                              Easy assembly included
                            </li>
                            <li className="flex items-center text-medium-grey">
                              <Star className="w-4 h-4 text-warm-brown mr-2" />
                              Free delivery available
                            </li>
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4 mt-auto">
                          <div className="flex gap-3">
                            <motion.button
                              className="flex-1 px-6 py-4 bg-warm-brown text-white rounded-xl font-medium hover:bg-charcoal-black transition-colors duration-300 flex items-center justify-center gap-2"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ShoppingCart className="w-5 h-5" />
                              Add to Cart
                            </motion.button>
                            <motion.button
                              className="px-4 py-4 border border-warm-brown text-warm-brown rounded-xl hover:bg-warm-brown hover:text-white transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Heart className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              className="px-4 py-4 border border-warm-brown text-warm-brown rounded-xl hover:bg-warm-brown hover:text-white transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Share2 className="w-5 h-5" />
                            </motion.button>
                          </div>

                          <motion.button
                            className="w-full px-6 py-3 border border-medium-grey text-medium-grey rounded-xl hover:border-warm-brown hover:text-warm-brown transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Request Custom Quote
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details Section */}
                    <div className="p-8 border-t border-light-grey">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Product Details */}
                        <div>
                          <h3 className="text-lg font-medium text-charcoal-black mb-4">Product Details</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-medium-grey">Material</span>
                              <p className="text-charcoal-black font-medium">Premium Wood</p>
                            </div>
                            <div>
                              <span className="text-sm text-medium-grey">Dimensions</span>
                              <p className="text-charcoal-black font-medium">Custom Available</p>
                            </div>
                            <div>
                              <span className="text-sm text-medium-grey">Color Options</span>
                              <p className="text-charcoal-black font-medium">Multiple Available</p>
                            </div>
                            <div>
                              <span className="text-sm text-medium-grey">Warranty</span>
                              <p className="text-charcoal-black font-medium">5 Years</p>
                            </div>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div>
                          <h3 className="text-lg font-medium text-charcoal-black mb-4">Shipping & Service</h3>
                          <div className="text-sm text-medium-grey space-y-2">
                            <p>• Free shipping on orders over $500</p>
                            <p>• 30-day return policy</p>
                            <p>• Professional assembly available</p>
                            <p>• Design consultation included</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Catalog;
