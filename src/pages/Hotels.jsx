import React, { useState } from 'react';

const Hotels = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: "Kabul Serena Hotel",
      price: 120,
      rating: 4.5,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Kabul",
      category: "luxury",
      featured: true
    },
    {
      id: 2,
      name: "Herat Guest House",
      price: 45,
      rating: 4.2,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Herat",
      category: "budget",
      featured: false
    },
    {
      id: 3,
      name: "Mazar-i-Sharif Hotel",
      price: 85,
      rating: 4.0,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Mazar-i-Sharif",
      category: "mid-range",
      featured: true
    },
    {
      id: 4,
      name: "Bamiyan Eco Lodge",
      price: 65,
      rating: 4.7,
      reviews: 53,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Bamiyan",
      category: "eco",
      featured: false
    },
    {
      id: 5,
      name: "Kandahar Palace Hotel",
      price: 95,
      rating: 4.3,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Kandahar",
      category: "luxury",
      featured: true
    },
    {
      id: 6,
      name: "Jalalabad Riverside Inn",
      price: 55,
      rating: 4.1,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Jalalabad",
      category: "budget",
      featured: false
    }
  ];

  // Filter hotels based on category
  const filteredHotels = filter === 'all' ? hotels : hotels.filter(hotel => hotel.category === filter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Afghanistan Tourism</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-primary">Home</a>
              <a href="/about" className="text-gray-600 hover:text-primary">About</a>
              <a href="/tours" className="text-gray-600 hover:text-primary">Tours</a>
              <a href="/hotels" className="text-primary font-medium">Hotels</a>
              <a href="/restaurants" className="text-gray-600 hover:text-primary">Restaurants</a>
              <a href="/contact" className="text-gray-600 hover:text-primary">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-primary">
                <i className="icon-search"></i>
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Afghanistan Hotels</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Find comfortable accommodation across Afghanistan's major cities and destinations
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Hotels
            </button>
            <button 
              onClick={() => setFilter('luxury')}
              className={`px-6 py-2 rounded-full ${filter === 'luxury' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Luxury
            </button>
            <button 
              onClick={() => setFilter('mid-range')}
              className={`px-6 py-2 rounded-full ${filter === 'mid-range' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Mid-Range
            </button>
            <button 
              onClick={() => setFilter('budget')}
              className={`px-6 py-2 rounded-full ${filter === 'budget' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Budget
            </button>
            <button 
              onClick={() => setFilter('eco')}
              className={`px-6 py-2 rounded-full ${filter === 'eco' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Eco-Friendly
            </button>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map(hotel => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${hotel.price}/night
                  </div>
                  {hotel.featured && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((star, i) => (
                        <i key={i} className={`icon-star${i < Math.floor(hotel.rating) ? '' : '-half'}`}></i>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({hotel.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600"><i className="icon-location"></i> {hotel.location}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                      {hotel.category.charAt(0).toUpperCase() + hotel.category.slice(1)}
                    </span>
                  </div>
                  <button className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Finding the Perfect Accommodation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our travel experts can help you find the best hotels for your Afghanistan trip
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </a>
            <a href="#" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              View All Properties
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Afghanistan Tourism</h3>
              <p className="text-gray-400">Discover the beauty and rich heritage of Afghanistan with our expertly curated tours and experiences.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/tours" className="text-gray-400 hover:text-white">Tours</a></li>
                <li><a href="/hotels" className="text-gray-400 hover:text-white">Hotels</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Kabul</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Herat</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mazar-i-Sharif</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kandahar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Bamiyan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <i className="icon-phone mr-2 mt-1"></i>
                  <span>+93 20 123 4567</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-mail mr-2 mt-1"></i>
                  <span>info@afghanistantourism.af</span>
                </li>
                <li className="flex items-start">
                  <i className="icon-location mr-2 mt-1"></i>
                  <span>Kabul, Afghanistan</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Afghanistan Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hotels;