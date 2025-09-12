import React, { useState } from 'react';

const Tours = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample tour data
  const tours = [
    {
      id: 1,
      title: "Kabul City Tour",
      price: 89,
      duration: "3 days",
      rating: 4.5,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1544070797-3d52d9a5fdd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "city",
      popular: true
    },
    {
      id: 2,
      title: "Bamiyan Valley Adventure",
      price: 129,
      duration: "5 days",
      rating: 5,
      reviews: 38,
      image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "adventure",
      popular: true
    },
    {
      id: 3,
      title: "Herat Historical Journey",
      price: 99,
      duration: "4 days",
      rating: 4.5,
      reviews: 29,
      image: "https://images.unsplash.com/photo-1598932912091-044f1b6e0d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "cultural",
      popular: false
    },
    {
      id: 4,
      title: "Mazar-i-Sharif Pilgrimage",
      price: 79,
      duration: "2 days",
      rating: 4,
      reviews: 35,
      image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "religious",
      popular: true
    },
    {
      id: 5,
      title: "Band-e-Amir National Park",
      price: 109,
      duration: "3 days",
      rating: 4.8,
      reviews: 27,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "nature",
      popular: false
    },
    {
      id: 6,
      title: "Jalalabad Cultural Tour",
      price: 69,
      duration: "2 days",
      rating: 4.3,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "cultural",
      popular: false
    }
  ];

  // Filter tours based on category
  const filteredTours = filter === 'all' ? tours : tours.filter(tour => tour.category === filter);

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
              <a href="/tours" className="text-primary font-medium">Tours</a>
              <a href="/hotels" className="text-gray-600 hover:text-primary">Hotels</a>
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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Afghanistan Tours</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated tours across Afghanistan's most beautiful destinations
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
              All Tours
            </button>
            <button 
              onClick={() => setFilter('city')}
              className={`px-6 py-2 rounded-full ${filter === 'city' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              City Tours
            </button>
            <button 
              onClick={() => setFilter('adventure')}
              className={`px-6 py-2 rounded-full ${filter === 'adventure' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Adventure
            </button>
            <button 
              onClick={() => setFilter('cultural')}
              className={`px-6 py-2 rounded-full ${filter === 'cultural' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Cultural
            </button>
            <button 
              onClick={() => setFilter('nature')}
              className={`px-6 py-2 rounded-full ${filter === 'nature' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Nature
            </button>
            <button 
              onClick={() => setFilter('religious')}
              className={`px-6 py-2 rounded-full ${filter === 'religious' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Religious
            </button>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map(tour => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${tour.price}
                  </div>
                  {tour.popular && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((star, i) => (
                        <i key={i} className={`icon-star${i < Math.floor(tour.rating) ? '' : '-half'}`}></i>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({tour.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600"><i className="icon-clock"></i> {tour.duration}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                      {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
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
          <h2 className="text-3xl font-bold mb-6">Ready for an Unforgettable Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your Afghanistan tour today and experience the beauty of the Heart of Asia
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </a>
            <a href="#" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Download Brochure
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

export default Tours;