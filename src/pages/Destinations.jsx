import React, { useState } from 'react';
import DestinationCard from '../components/cards/DestinationCard';

const Destinations = () => {
  // Dummy data for destinations
  const allDestinations = [
    {
      id: 1,
      name: "Bamiyan Valley",
      description: "Home to the ancient Buddha statues and stunning mountain landscapes. A UNESCO World Heritage site with breathtaking views.",
      image: "/images/destination1.jpg",
      price: 299,
      region: "Bamiyan"
    },
    {
      id: 2,
      name: "Band-e-Amir",
      description: "Afghanistan's first national park featuring six stunning turquoise lakes separated by natural travertine dams.",
      image: "/images/destination2.jpg",
      price: 199,
      region: "Bamiyan"
    },
    {
      id: 3,
      name: "Herat Citadel",
      description: "Historic fortress showcasing Afghan architecture and history, with beautiful gardens and ancient walls.",
      image: "/images/destination3.jpg",
      price: 149,
      region: "Herat"
    },
    {
      id: 4,
      name: "Minaret of Jam",
      description: "UNESCO World Heritage site featuring a 65-meter tall minaret from the 12th century, decorated with intricate brickwork.",
      image: "/images/destination4.jpg",
      price: 249,
      region: "Ghor"
    },
    {
      id: 5,
      name: "Blue Mosque",
      description: "Beautiful 15th-century mosque in Mazar-i-Sharif, known for its stunning blue-tiled interior and golden dome.",
      image: "/images/destination5.jpg",
      price: 99,
      region: "Balkh"
    },
    {
      id: 6,
      name: "Kabul Museum",
      description: "National museum showcasing Afghanistan's rich cultural heritage, with artifacts from ancient civilizations.",
      image: "/images/destination6.jpg",
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
      <div className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Destinations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore the breathtaking landscapes, historic sites, and cultural treasures of Afghanistan
          </p>
        </div>
      </div>
      
      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Destinations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      Previous
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-full ${currentPage === pageNumber ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;