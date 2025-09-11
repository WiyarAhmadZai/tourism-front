import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PackageDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Dummy data for package
  const tourPackage = {
    id: id || 1,
    name: "Cultural Heritage Tour",
    description: "Explore the ancient cities and cultural sites of Afghanistan including Kabul, Herat, and Bamiyan. This comprehensive tour takes you through the heart of Afghanistan's rich history and cultural heritage.",
    detailedDescription: "This 7-day cultural heritage tour is designed for travelers who want to experience the depth of Afghanistan's history and culture. Starting in Kabul, you'll visit the National Museum and the historic Darul Aman Palace. The journey continues to Herat, known for its stunning Islamic architecture, including the Friday Mosque and the Musalla Complex. The tour culminates in Bamiyan, where you'll explore the UNESCO World Heritage site of the ancient Buddha statues and the beautiful Band-e-Amir lakes. Throughout the tour, you'll stay in comfortable accommodations and enjoy delicious local cuisine.",
    price: 899,
    duration: "7 days",
    rating: 5,
    region: "Central Afghanistan",
    images: [
      "/images/package-detail1.jpg",
      "/images/package-detail2.jpg",
      "/images/package-detail3.jpg"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kabul",
        description: "Welcome to Afghanistan! Upon arrival at Kabul International Airport, you'll be met by our representative and transferred to your hotel. Evening orientation walk through the city center."
      },
      {
        day: 2,
        title: "Kabul City Tour",
        description: "Full day guided tour of Kabul including the National Museum, Darul Aman Palace, and the bustling Kabul Bazaar. Lunch at a local restaurant featuring traditional Afghan cuisine."
      },
      {
        day: 3,
        title: "Travel to Herat",
        description: "Morning flight to Herat (approximately 1.5 hours). Afternoon visit to the historic Friday Mosque and Citadel. Overnight in Herat."
      },
      {
        day: 4,
        title: "Herat Historical Sites",
        description: "Full day exploring Herat's UNESCO World Heritage sites including the Musalla Complex and the tomb of Queen Gawhar Shad. Evening cultural performance."
      },
      {
        day: 5,
        title: "Journey to Bamiyan",
        description: "Drive to Bamiyan Valley (approximately 6 hours with scenic stops). Visit the ancient Shahr-e-Zohak fortress en route. Overnight in Bamiyan."
      },
      {
        day: 6,
        title: "Bamiyan Exploration",
        description: "Full day tour of the Bamiyan Valley including the UNESCO World Heritage site, Band-e-Amir National Park, and local caves. Meet with local artisans."
      },
      {
        day: 7,
        title: "Departure",
        description: "Morning at leisure for last-minute shopping or sightseeing. Transfer to Bamiyan Airport for flight to Kabul and onward departure."
      }
    ],
    includes: [
      "Airport transfers in Kabul, Herat, and Bamiyan",
      "5-star accommodation for 6 nights",
      "Daily breakfast and 4 dinners",
      "English speaking professional guide",
      "All entrance fees to sites mentioned in itinerary",
      "Domestic flights: Kabul-Herat-Kabul",
      "All transportation during the tour"
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Lunches and beverages",
      "Personal expenses and tips",
      "Visa fees"
    ],
    importantInfo: [
      "Please bring comfortable walking shoes",
      "Modest clothing is required for visiting religious sites",
      "Photography may be restricted at certain locations",
      "Travel insurance is highly recommended",
      "Please check visa requirements for Afghanistan"
    ]
  };

  const relatedPackages = [
    {
      id: 2,
      name: "Mountain Adventure",
      description: "Hiking and trekking through the beautiful Hindu Kush mountains.",
      image: "/images/package2.jpg",
      price: 1299,
      duration: "10 days",
      rating: 4
    },
    {
      id: 4,
      name: "Northern Circuit",
      description: "Visit the historic cities of Mazar-i-Sharif and Balkh.",
      image: "/images/package4.jpg",
      price: 799,
      duration: "6 days",
      rating: 5
    }
  ];

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="/images/package-banner.jpg" 
          alt={tourPackage.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{tourPackage.name}</h1>
                <p className="text-xl text-gray-200">{tourPackage.region}</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-3xl font-bold text-white">${tourPackage.price}</div>
                <div className="text-gray-200">per person</div>
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
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('itinerary')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'itinerary'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Itinerary
                  </button>
                  <button
                    onClick={() => setActiveTab('info')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'info'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Info
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Overview</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tourPackage.description}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {tourPackage.detailedDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{tourPackage.duration}</div>
                      <div className="text-gray-700">Duration</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-6 h-6 ${i < tourPackage.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-gray-700">Rating</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">Group</div>
                      <div className="text-gray-700">Size 2-12</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tour Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {tourPackage.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${tourPackage.name} ${index + 1}`} 
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h2>
                  
                  <div className="space-y-6">
                    {tourPackage.itinerary.map((day, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex flex-wrap items-center mb-4">
                          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            Day {day.day}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{day.title}</h3>
                        </div>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'info' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                      <ul className="space-y-3">
                        {tourPackage.includes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">What's Excluded</h3>
                      <ul className="space-y-3">
                        {tourPackage.excludes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Important Information</h3>
                    <ul className="space-y-3">
                      {tourPackage.importantInfo.map((info, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="text-gray-700">{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Book This Tour</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-gray-700">Select Date</label>
                    <span className="text-sm text-gray-500">Flexible</span>
                  </div>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Number of Travelers</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="bg-gray-200 text-gray-700 w-10 h-10 rounded-l-lg flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <div className="bg-gray-100 w-16 h-10 flex items-center justify-center">
                      {quantity}
                    </div>
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="bg-gray-200 text-gray-700 w-10 h-10 rounded-r-lg flex items-center justify-center hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">${tourPackage.price} × {quantity} traveler(s)</span>
                    <span className="font-medium">${tourPackage.price * quantity}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-medium">$49</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${tourPackage.price * quantity + 49}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-4">
                  Add to Cart
                </button>
                
                <button className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-4 rounded-lg transition-colors">
                  Book Now
                </button>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3">Have Questions?</h4>
                  <p className="text-gray-600 mb-4">
                    Our travel experts are ready to help you plan the perfect trip.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              
              {/* Related Packages */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Packages</h3>
                <div className="space-y-4">
                  {relatedPackages.map((pkg) => (
                    <div key={pkg.id} className="flex border border-gray-200 rounded-lg overflow-hidden">
                      <div className="w-24 h-24">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex-grow">
                        <h4 className="font-bold text-gray-800 text-sm">{pkg.name}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-green-600 font-bold">${pkg.price}</span>
                          <span className="text-gray-500 text-sm ml-2">{pkg.duration}</span>
                        </div>
                        <a 
                          href={`/package/${pkg.id}`} 
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;