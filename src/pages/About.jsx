import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Afghanistan Tourism</div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-primary">Home</a>
              <a href="/about" className="text-primary font-medium">About</a>
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

      {/* Page Header */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Afghanistan Tourism</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Discover the rich heritage, stunning landscapes, and warm hospitality of Afghanistan
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Afghanistan Landscape" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover the Heart of Asia</h2>
              <p className="text-gray-600 mb-6">
                Afghanistan, often referred to as the "Heart of Asia," is a land of breathtaking landscapes, 
                ancient civilizations, and rich cultural heritage. From the towering peaks of the Hindu Kush 
                to the historic cities along the Silk Road, Afghanistan offers a unique and unforgettable 
                travel experience.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to showcase the true beauty of Afghanistan to the world, breaking stereotypes 
                and inviting travelers to experience the authentic warmth and hospitality of the Afghan people. 
                We provide safe, well-organized tours that highlight the country's archaeological sites, 
                natural wonders, and vibrant local cultures.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-primary text-white rounded-full p-3 mr-4">
                    <i className="icon-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Safe Travel</h4>
                    <p className="text-gray-600 text-sm">Security is our priority</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white rounded-full p-3 mr-4">
                    <i className="icon-users"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Local Guides</h4>
                    <p className="text-gray-600 text-sm">Expert local knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-primary text-white rounded-xl shadow-lg p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-lg">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-lg">Destinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Expert Guides</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Meet our passionate team of travel experts dedicated to providing you with unforgettable experiences
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Team Member" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ahmad Farid</h3>
                <p className="text-primary mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  Passionate about showcasing Afghanistan's beauty to the world
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                  alt="Team Member" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Maryam Rahimi</h3>
                <p className="text-primary mb-3">Tour Manager</p>
                <p className="text-gray-600">
                  Expert in creating memorable cultural experiences
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Team Member" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Zahir Khan</h3>
                <p className="text-primary mb-3">Local Guide</p>
                <p className="text-gray-600">
                  Native guide with deep knowledge of Afghan history
                </p>
              </div>
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

export default About;