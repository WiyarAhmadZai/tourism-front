import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
              <a href="/restaurants" className="text-gray-600 hover:text-primary">Restaurants</a>
              <a href="/contact" className="text-primary font-medium">Contact</a>
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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Have questions about traveling to Afghanistan? Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full p-3 mr-4">
                      <i className="icon-location"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Our Office</h3>
                      <p className="text-gray-600">123 Tourism Street, Kabul, Afghanistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full p-3 mr-4">
                      <i className="icon-phone"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone Number</h3>
                      <p className="text-gray-600">+93 20 123 4567</p>
                      <p className="text-gray-600">+93 70 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full p-3 mr-4">
                      <i className="icon-mail"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email Address</h3>
                      <p className="text-gray-600">info@afghanistantourism.af</p>
                      <p className="text-gray-600">support@afghanistantourism.af</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full p-3 mr-4">
                      <i className="icon-clock"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
                      <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition duration-300">
                      <i className="icon-facebook"></i>
                    </a>
                    <a href="#" className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition duration-300">
                      <i className="icon-twitter"></i>
                    </a>
                    <a href="#" className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition duration-300">
                      <i className="icon-instagram"></i>
                    </a>
                    <a href="#" className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition duration-300">
                      <i className="icon-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">Map of Afghanistan Tourism Office</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-gray-800 mb-2">Is it safe to travel to Afghanistan?</h3>
                    <p className="text-gray-600">
                      We prioritize the safety of our travelers. Our tours are carefully planned to avoid high-risk areas 
                      and are led by experienced local guides who know the regions well.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-gray-800 mb-2">What should I pack for an Afghanistan tour?</h3>
                    <p className="text-gray-600">
                      Pack comfortable clothing suitable for the season, modest attire for cultural sensitivity, 
                      good walking shoes, and any personal medications. We provide a detailed packing list with your booking.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-gray-800 mb-2">Do I need a visa to visit Afghanistan?</h3>
                    <p className="text-gray-600">
                      Yes, most foreign nationals require a visa to enter Afghanistan. We can provide guidance on 
                      the visa application process and assist with necessary documentation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">What currency is used in Afghanistan?</h3>
                    <p className="text-gray-600">
                      The official currency is the Afghan Afghani (AFN). US Dollars are also widely accepted in 
                      tourist areas. We recommend carrying some cash for smaller purchases.
                    </p>
                  </div>
                </div>
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

export default Contact;