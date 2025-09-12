import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Explore = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  
  // Dummy data for provinces
  const provinces = [
    {
      id: 1,
      name: "Kabul",
      description: "The capital and largest city of Afghanistan, known for its rich history and cultural sites.",
      highlights: ["Kabul Museum", "Darul Aman Palace", "Kabul Bazaar"],
      position: { top: "30%", left: "45%" }
    },
    {
      id: 2,
      name: "Herat",
      description: "Known as the 'City of Peace' and famous for its Persian-influenced architecture.",
      highlights: ["Herat Citadel", "Friday Mosque", "Musalla Complex"],
      position: { top: "25%", left: "20%" }
    },
    {
      id: 3,
      name: "Bamiyan",
      description: "Home to the ancient Buddha statues and stunning mountain landscapes.",
      highlights: ["Buddhas of Bamiyan", "Band-e-Amir", "Shahr-e-Zohak"],
      position: { top: "20%", left: "40%" }
    },
    {
      id: 4,
      name: "Mazar-i-Sharif",
      description: "Known for the Blue Mosque and as a center of Afghan culture and commerce.",
      highlights: ["Blue Mosque", "Balkh Ancient City", "Mazar-i-Sharif Bazaar"],
      position: { top: "15%", left: "55%" }
    },
    {
      id: 5,
      name: "Kandahar",
      description: "The second-largest city and a historic center of Afghan culture.",
      highlights: ["Shrine of Ahmed Shah", "Kandahar Citadel", "Chilzina"],
      position: { top: "50%", left: "25%" }
    }
  ];

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
            Explore Afghanistan
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the provinces and regions of Afghanistan through our interactive map
          </motion.p>
        </div>
      </motion.div>
      
      {/* Map Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Interactive Province Map</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any province to learn more about its unique attractions and cultural heritage
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="relative bg-white rounded-xl shadow-lg p-4 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Map Container */}
              <div className="relative h-96 md:h-[500px] bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                {/* Using an image from the public folder for the map */}
                <img 
                  src="/images/abstract-architecture-background-brick-194096.jpg" 
                  alt="Map of Afghanistan" 
                  className="w-full h-full object-cover"
                />
                
                {/* Province Markers */}
                {provinces.map((province, index) => (
                  <motion.div
                    key={province.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ top: province.position.top, left: province.position.left }}
                    onClick={() => setSelectedProvince(province)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-lg flex items-center justify-center hover:scale-125 transition-transform">
                      <span className="text-white text-xs font-bold">{province.id}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Province Details Panel */}
              {selectedProvince && (
                <motion.div 
                  className="mt-8 bg-white border border-gray-200 rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-800">{selectedProvince.name}</h3>
                    <button 
                      onClick={() => setSelectedProvince(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 mt-2">{selectedProvince.description}</p>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Key Highlights:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {selectedProvince.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={`/destinations?province=${selectedProvince.name}`} 
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      Explore {selectedProvince.name}
                    </a>
                  </div>
                </motion.div>
              )}
              
              {/* Map Legend */}
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-600 mr-2"></div>
                  <span className="text-gray-700 text-sm">Provincial Capitals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded bg-blue-100 border border-blue-300 mr-2"></div>
                  <span className="text-gray-700 text-sm">Major Cities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded bg-yellow-100 border border-yellow-300 mr-2"></div>
                  <span className="text-gray-700 text-sm">UNESCO Sites</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Province List */}
      <motion.section 
        className="py-16 bg-white"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Provinces</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover information about all 34 provinces of Afghanistan
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {provinces.map((province, index) => (
              <motion.div 
                key={province.id} 
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedProvince(province)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{province.name}</h3>
                <p className="text-gray-600 line-clamp-2">{province.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {province.highlights.slice(0, 2).map((highlight, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                  {province.highlights.length > 2 && (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      +{province.highlights.length - 2} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Explore;