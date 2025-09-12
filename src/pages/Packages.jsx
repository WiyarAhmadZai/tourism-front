import React, { useState } from 'react';
import PackageCard from '../components/cards/PackageCard';
import { motion } from 'framer-motion';

const Packages = () => {
  // Using images from the public folder
  const allPackages = [
    {
      id: 1,
      name: "Cultural Heritage Tour",
      description: "Explore the ancient cities and cultural sites of Afghanistan including Kabul, Herat, and Bamiyan.",
      image: "/images/IMG_3629.JPG",
      price: 899,
      duration: "7 days",
      rating: 5,
      region: "Central Afghanistan",
      includes: ["Airport transfers", "5-star accommodation", "Daily breakfast", "English speaking guide", "Entrance fees"]
    },
    {
      id: 2,
      name: "Mountain Adventure",
      description: "Hiking and trekking through the beautiful Hindu Kush mountains with stunning views and local experiences.",
      image: "/images/wp11994780.jpg",
      price: 1299,
      duration: "10 days",
      rating: 4,
      region: "Northern Afghanistan",
      includes: ["Airport transfers", "Mountain lodge accommodation", "All meals", "Professional guide", "Equipment rental"]
    },
    {
      id: 3,
      name: "Desert Exploration",
      description: "Discover the unique desert landscapes of southern Afghanistan and experience traditional nomad culture.",
      image: "/images/wp5419943.jpg",
      price: 699,
      duration: "5 days",
      rating: 4,
      region: "Southern Afghanistan",
      includes: ["Airport transfers", "Desert camp accommodation", "All meals", "Local guide", "Camel rides"]
    },
    {
      id: 4,
      name: "Northern Circuit",
      description: "Visit the historic cities of Mazar-i-Sharif, Balkh, and explore the ancient Buddhist sites.",
      image: "/images/648491.jpg",
      price: 799,
      duration: "6 days",
      rating: 5,
      region: "Northern Afghanistan",
      includes: ["Airport transfers", "4-star accommodation", "Daily breakfast", "English speaking guide", "Entrance fees"]
    },
    {
      id: 5,
      name: "Kabul City Experience",
      description: "Immerse yourself in the vibrant capital city with museum visits, bazaars, and cultural experiences.",
      image: "/images/IMG.jpg",
      price: 499,
      duration: "4 days",
      rating: 4,
      region: "Kabul",
      includes: ["Airport transfers", "3-star accommodation", "Daily breakfast", "City guide", "Entrance fees"]
    },
    {
      id: 6,
      name: "Jewels of the Silk Road",
      description: "Follow the ancient trade routes through Herat, Balkh, and other historic trading centers.",
      image: "/images/ddd.jpg",
      price: 1099,
      duration: "8 days",
      rating: 5,
      region: "Western Afghanistan",
      includes: ["Airport transfers", "5-star accommodation", "All meals", "Expert guide", "Entrance fees"]
    }
  ];

  const [packages] = useState(allPackages);
  const [filteredPackages, setFilteredPackages] = useState(allPackages);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [duration, setDuration] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Get unique regions for filter
  const regions = [...new Set(allPackages.map(p => p.region))];

  // Filter packages based on criteria
  const filterPackages = () => {
    let result = allPackages;
    
    if (searchTerm) {
      result = result.filter(pkg => 
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedRegion) {
      result = result.filter(pkg => pkg.region === selectedRegion);
    }
    
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(pkg => pkg.price >= min && pkg.price <= max);
    }
    
    if (duration) {
      result = result.filter(pkg => pkg.duration === duration);
    }
    
    // Sort packages
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'duration') {
      result.sort((a, b) => {
        const aDays = parseInt(a.duration);
        const bDays = parseInt(b.duration);
        return aDays - bDays;
      });
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredPackages(result);
  };

  // Apply filters when criteria change
  React.useEffect(() => {
    filterPackages();
  }, [searchTerm, selectedRegion, priceRange, duration, sortBy]);

  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tour Packages
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Curated experiences for unforgettable journeys through Afghanistan
          </motion.p>
        </div>
      </motion.div>
      
      {/* Filter Section */}
      <motion.section 
        className="py-8 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Search packages..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">Any Price</option>
                <option value="0-500">Under $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-2000">$1000 - $2000</option>
                <option value="2000-10000">Over $2000</option>
              </select>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Any Duration</option>
                <option value="3 days">3 days</option>
                <option value="4 days">4 days</option>
                <option value="5 days">5 days</option>
                <option value="6 days">6 days</option>
                <option value="7 days">7 days</option>
                <option value="8 days">8 days</option>
                <option value="10 days">10 days</option>
              </select>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
                <option value="rating">Rating</option>
              </select>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Packages Grid */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          {filteredPackages.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No packages found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {filteredPackages.map((tourPackage, index) => (
                <motion.div
                  key={tourPackage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PackageCard tourPackage={tourPackage} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-blue-600 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Customize Your Own Adventure
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't see what you're looking for? Our travel experts can create a personalized itinerary just for you.
          </motion.p>
          <motion.a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Custom Package
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Packages;