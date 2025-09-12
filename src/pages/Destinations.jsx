import React, { useState } from 'react';
import DestinationCard from '../components/cards/DestinationCard';
import { motion } from 'framer-motion';

const Destinations = () => {
  // Using images from the public folder
  const allDestinations = [
    {
      id: 1,
      name: "Bamiyan Valley",
      description: "Home to the ancient Buddha statues and stunning mountain landscapes. A UNESCO World Heritage site with breathtaking views.",
      image: "/images/IMG_3605.JPG",
      price: 299,
      region: "Bamiyan"
    },
    {
      id: 2,
      name: "Band-e-Amir",
      description: "Afghanistan's first national park featuring six stunning turquoise lakes separated by natural travertine dams.",
      image: "/images/IMG_3612.JPG",
      price: 199,
      region: "Bamiyan"
    },
    {
      id: 3,
      name: "Herat Citadel",
      description: "Historic fortress showcasing Afghan architecture and history, with beautiful gardens and ancient walls.",
      image: "/images/IMG_3614.JPG",
      price: 149,
      region: "Herat"
    },
    {
      id: 4,
      name: "Minaret of Jam",
      description: "UNESCO World Heritage site featuring a 65-meter tall minaret from the 12th century, decorated with intricate brickwork.",
      image: "/images/IMG_3623.JPG",
      price: 249,
      region: "Ghor"
    },
    {
      id: 5,
      name: "Blue Mosque",
      description: "Beautiful 15th-century mosque in Mazar-i-Sharif, known for its stunning blue-tiled interior and golden dome.",
      image: "/images/IMG_3624.JPG",
      price: 99,
      region: "Balkh"
    },
    {
      id: 6,
      name: "Kabul Museum",
      description: "National museum showcasing Afghanistan's rich cultural heritage, with artifacts from ancient civilizations.",
      image: "/images/IMG_3628.JPG",
      price: 79,
      region: "Kabul"
    }
  ];

  const [destinations] = useState(allDestinations);
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 6;

  // Get unique regions for filter
  const regions = [...new Set(allDestinations.map(d => d.region))];

  // Filter destinations based on search and region
  const filterDestinations = () => {
    let result = allDestinations;
    
    if (searchTerm) {
      result = result.filter(destination => 
        destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedRegion) {
      result = result.filter(destination => destination.region === selectedRegion);
    }
    
    setFilteredDestinations(result);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Apply filters when search term or region changes
  React.useEffect(() => {
    filterDestinations();
  }, [searchTerm, selectedRegion]);

  // Get current destinations for pagination
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstDestination, indexOfLastDestination);
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            Discover Destinations
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the breathtaking landscapes, historic sites, and cultural treasures of Afghanistan
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
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Destinations Grid */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          {filteredDestinations.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <DestinationCard destination={destination} />
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === 1 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Previous
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-full ${
                            currentPage === pageNumber
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === totalPages 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Next
                    </button>
                  </nav>
                </motion.div>
              )}
            </>
          )}
        </div>
      </motion.section>
      
      {/* Featured Regions */}
      <motion.section 
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore by Region</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the unique attractions and cultural heritage of Afghanistan's diverse regions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Central Highlands",
                description: "Rugged mountain terrain with ancient fortresses and traditional villages",
                image: "/images/region1.jpg",
                destinations: 12
              },
              {
                name: "Northern Plains",
                description: "Fertile agricultural lands and historic Silk Road cities",
                image: "/images/region2.jpg",
                destinations: 8
              },
              {
                name: "Western Mountains",
                description: "Dramatic peaks and culturally rich Persian-influenced cities",
                image: "/images/region3.jpg",
                destinations: 10
              }
            ].map((region, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 relative">
                  <img 
                    src={region.image} 
                    alt={region.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{region.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{region.destinations} destinations</span>
                    <a 
                      href={`/destinations?region=${region.name}`} 
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Destinations;