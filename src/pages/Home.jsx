import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Afghanistan Tourism</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-primary font-medium">Home</a>
              <a href="/about" className="text-gray-600 hover:text-primary">About</a>
              <a href="/tours" className="text-gray-600 hover:text-primary">Tours</a>
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544070797-3d52d9a5fdd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Afghanistan</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the beauty and rich heritage of the heart of Asia</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/tours" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Explore Tours
            </a>
            <a href="/about" className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Afghanistan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the diverse experiences Afghanistan has to offer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/tours" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1561501900-30b3f9991d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Tours" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Tours</h3>
                    <p>120+ Locations</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="/hotels" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Hotels" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Hotels</h3>
                    <p>85+ Locations</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="/restaurants" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Restaurants" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Restaurants</h3>
                    <p>200+ Locations</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="/about" className="block group">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Culture" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Culture</h3>
                    <p>Rich Heritage</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our most popular destinations in Afghanistan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544070797-3d52d9a5fdd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Kabul Tour" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  $89
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Kabul City Tour</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star-half"></i>
                  </div>
                  <span className="text-gray-600 text-sm ml-2">(42 reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">Explore the capital city of Afghanistan with our guided tour including historical sites and cultural experiences.</p>
                <button className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg transition duration-300">
                  View Details
                </button>
              </div>
            </div>
            
            {/* Tour 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Bamiyan Tour" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  $129
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bamiyan Valley Tour</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                  </div>
                  <span className="text-gray-600 text-sm ml-2">(38 reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">Discover the ancient Buddhas of Bamiyan and explore the beautiful valley with its rich history.</p>
                <button className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg transition duration-300">
                  View Details
                </button>
              </div>
            </div>
            
            {/* Tour 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1598932912091-044f1b6e0d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Herat Tour" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  $99
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Herat Historical Tour</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star-half"></i>
                  </div>
                  <span className="text-gray-600 text-sm ml-2">(29 reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">Explore the ancient city of Herat, known for its beautiful architecture and rich cultural heritage.</p>
                <button className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/tours" className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              View All Tours
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

export default Home;