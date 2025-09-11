import React, { useState } from 'react';
import Hero from '../components/layout/Hero';

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
      <div className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Afghanistan</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover the provinces and regions of Afghanistan through our interactive map
          </p>
        </div>
      </div>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Interactive Province Map</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any province to learn more about its unique attractions and cultural heritage
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-lg p-4 md:p-8">
              {/* Map Container */}
              <div className="relative h-96 md:h-[500px] bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                {/* Map Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-blue-50">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="mt-4 text-gray-500">Interactive Map of Afghanistan</p>
                    <p className="text-sm text-gray-400 mt-2">Map image will be placed at /public/images/map.png</p>
                  </div>
                </div>
                
                {/* Province Markers */}
                {provinces.map((province) => (
                  <div
                    key={province.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ top: province.position.top, left: province.position.left }}
                    onClick={() => setSelectedProvince(province)}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-lg flex items-center justify-center hover:scale-125 transition-transform">
                      <span className="text-white text-xs font-bold">{province.id}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Province Details Panel */}
              {selectedProvince && (
                <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
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
                </div>
              )}
              
              {/* Map Legend */}
              <div className="mt-8 flex flex-wrap gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Province List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Provinces</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover information about all 34 provinces of Afghanistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {provinces.map((province) => (
              <div 
                key={province.id} 
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedProvince(province)}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;