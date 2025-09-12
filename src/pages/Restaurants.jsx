import React, { useState } from 'react';

const Restaurants = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Kabul Restaurant",
      cuisine: "Afghan",
      price: "$$",
      rating: 4.5,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Kabul",
      category: "traditional",
      featured: true
    },
    {
      id: 2,
      name: "Herat Cuisine",
      cuisine: "Afghan",
      price: "$$",
      rating: 4.3,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Herat",
      category: "traditional",
      featured: false
    },
    {
      id: 3,
      name: "Mazar-i-Sharif Bistro",
      cuisine: "International",
      price: "$$$",
      rating: 4.7,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Mazar-i-Sharif",
      category: "fine-dining",
      featured: true
    },
    {
      id: 4,
      name: "Bamiyan Vegetarian",
      cuisine: "Vegetarian",
      price: "$",
      rating: 4.6,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Bamiyan",
      category: "vegetarian",
      featured: false
    },
    {
      id: 5,
      name: "Kandahar Grill",
      cuisine: "Afghan",
      price: "$$",
      rating: 4.4,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Kandahar",
      category: "traditional",
      featured: true
    },
    {
      id: 6,
      name: "Jalalabad Tea House",
      cuisine: "Local",
      price: "$",
      rating: 4.2,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Jalalabad",
      category: "cafe",
      featured: false
    }
  ];

  // Filter restaurants based on category
  const filteredRestaurants = filter === 'all' ? restaurants : restaurants.filter(restaurant => restaurant.category === filter);

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
              <a href="/hotels" className="text-gray-600 hover:text-primary">Hotels</a>
              <a href="/restaurants" className="text-primary font-medium">Restaurants</a>
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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Afghanistan Restaurants</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Experience the rich flavors of Afghan cuisine and international dishes
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
              All Restaurants
            </button>
            <button 
              onClick={() => setFilter('traditional')}
              className={`px-6 py-2 rounded-full ${filter === 'traditional' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Traditional Afghan
            </button>
            <button 
              onClick={() => setFilter('fine-dining')}
              className={`px-6 py-2 rounded-full ${filter === 'fine-dining' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Fine Dining
            </button>
            <button 
              onClick={() => setFilter('vegetarian')}
              className={`px-6 py-2 rounded-full ${filter === 'vegetarian' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Vegetarian
            </button>
            <button 
              onClick={() => setFilter('cafe')}
              className={`px-6 py-2 rounded-full ${filter === 'cafe' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Cafes
            </button>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map(restaurant => (
              <div key={restaurant.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    {restaurant.price}
                  </div>
                  {restaurant.featured && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((star, i) => (
                        <i key={i} className={`icon-star${i < Math.floor(restaurant.rating) ? '' : '-half'}`}></i>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({restaurant.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600"><i className="icon-location"></i> {restaurant.location}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                      {restaurant.cuisine}
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

      {/* Afghan Cuisine Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Afghan Cuisine</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Afghan cuisine is a delicious blend of Central Asian, Middle Eastern, and South Asian flavors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🍲</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Signature Dishes</h3>
              <p className="text-gray-600">
                Try traditional dishes like Kabuli Palaw, Mantu, and Qabili Chicken that define Afghan culinary culture.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">馕</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fresh Bread</h3>
              <p className="text-gray-600">
                Experience the famous Afghan bread (Naan) baked in traditional tandoor ovens.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🍵</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hospitality</h3>
              <p className="text-gray-600">
                Enjoy the warm Afghan hospitality with endless cups of chai and generous servings.
              </p>
            </div>
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

export default Restaurants;