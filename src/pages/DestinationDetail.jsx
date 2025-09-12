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
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
                    <p className="text-gray-600 mb-4">{destination.mapLocation}</p>
                    <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Map of {destination.name}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Region:</span>
                    <span className="font-medium">{destination.region}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">UNESCO Status:</span>
                    <span className="font-medium">World Heritage Site</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Apr - Oct</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Entry Fee:</span>
                    <span className="font-medium">{destination.entryFee}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Plan Your Visit</h3>
                <p className="text-gray-600 mb-6">
                  Ready to explore {destination.name}? Book a guided tour with our local experts for an unforgettable experience.
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Book a Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Destinations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 2,
                name: "Band-e-Amir",
                region: "Bamiyan",
                image: "/images/related1.jpg",
                description: "Afghanistan's first national park with stunning turquoise lakes."
              },
              {
                id: 3,
                name: "Herat Citadel",
                region: "Herat",
                image: "/images/related2.jpg",
                description: "Historic fortress showcasing Afghan architecture and history."
              },
              {
                id: 4,
                name: "Minaret of Jam",
                region: "Ghor",
                image: "/images/related3.jpg",
                description: "UNESCO World Heritage site featuring a 65-meter tall minaret."
              }
            ].map((related, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <img 
                    src={related.image} 
                    alt={related.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {related.region}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{related.name}</h3>
                  <p className="text-gray-600 mb-4">{related.description}</p>
                  <a 
                    href={`/destination/${related.id}`} 
                    className="text-green-600 hover:text-green-800 font-medium flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;