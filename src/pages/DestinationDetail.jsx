import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DestinationDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Dummy data for destination
  const destination = {
    id: id || 1,
    name: "Bamiyan Valley",
    region: "Bamiyan",
    description: "The Bamiyan Valley is a UNESCO World Heritage site located in the Hazarajat region of central Afghanistan. It is home to the ancient Buddha statues that were tragically destroyed in 2001, but the valley remains a place of immense historical and cultural significance. The valley features stunning mountain landscapes, ancient caves, and vibrant local communities.",
    detailedDescription: "The Bamiyan Valley has been inhabited for thousands of years and served as a crucial stop along the ancient Silk Road. The valley is surrounded by the Hindu Kush mountains and features a unique landscape of high plateaus and deep valleys. The two main Buddha statues, dating from the 6th century, were carved directly into the sandstone cliffs and stood at 35 and 53 meters tall respectively. Today, the site continues to attract archaeologists, historians, and tourists from around the world who come to appreciate its historical significance and natural beauty.",
    bestTime: "April to October is the best time to visit Bamiyan Valley. Spring (April-May) offers pleasant weather and blooming flowers, while summer (June-September) provides warm days perfect for exploring. Autumn (October) brings cooler temperatures and clear skies. Winter months (November-March) can be harsh with snow and freezing temperatures, making travel difficult.",
    travelTips: [
      "Dress modestly and respect local customs",
      "Bring warm clothing, even in summer, as temperatures can drop significantly at night",
      "Carry cash as credit cards are rarely accepted",
      "Hire a local guide for historical context and safe navigation",
      "Stay hydrated and bring sunscreen for daytime exploration",
      "Be prepared for limited internet and phone connectivity"
    ],
    images: [
      "/images/destination-detail1.jpg",
      "/images/destination-detail2.jpg",
      "/images/destination-detail3.jpg",
      "/images/destination-detail4.jpg"
    ],
    videos: [
      "/videos/destination1.mp4",
      "/videos/destination2.mp4"
    ],
    mapLocation: "Bamiyan, Afghanistan",
    entryFee: "$10 per person",
    openingHours: "8:00 AM - 6:00 PM daily"
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="/images/destination-banner.jpg" 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
                <p className="text-xl text-gray-200">{destination.region}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                  From ${destination.entryFee}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'overview'
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'gallery'
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Gallery
                  </button>
                  <button
                    onClick={() => setActiveTab('info')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'info'
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Visitor Info
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About {destination.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {destination.description}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {destination.detailedDescription}
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">UNESCO World Heritage Site</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Ancient Buddhist Statues</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Stunning Mountain Landscapes</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Rich Cultural Heritage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'gallery' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {destination.images.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={image} 
                          alt={`${destination.name} ${index + 1}`} 
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Videos</h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {destination.videos.map((video, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <video controls className="w-full h-64 object-cover">
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'info' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Visitor Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Best Time to Visit</h3>
                      <p className="text-gray-600 mb-4">{destination.bestTime}</p>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Opening Hours</h3>
                      <p className="text-gray-600 mb-4">{destination.openingHours}</p>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Entry Fee</h3>
                      <p className="text-gray-600 mb-4">{destination.entryFee}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Travel Tips</h3>
                      <ul className="space-y-3">
                        {destination.travelTips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Getting There</h3>
                    <p className="text-gray-600 mb-4">
                      Bamiyan Valley is accessible by road from Kabul, approximately a 6-7 hour drive. 
                      Regular buses and private taxis are available. The nearest airport is Bamiyan Airport, 
                      though flights are infrequent.
                    </p>
                    <div className="mt-4">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13144.012000000001!2d67.816667!3d34.816667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ5JzAwLjAiTiA2N8KwNDknMDAuMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Destination Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Plan Your Visit</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Select Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Number of Visitors</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-4">
                  Book Now
                </button>
                
                <button className="w-full bg-white border border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-4 rounded-lg transition-colors">
                  Add to Itinerary
                </button>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3">Share this Destination</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-green-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;