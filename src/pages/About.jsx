import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Afghanistan Tourism</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Promoting sustainable tourism and showcasing the natural wonders, historical sites, and cultural experiences of Afghanistan
          </p>
        </div>
      </div>
      
      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              Afghanistan Tourism is dedicated to promoting responsible and sustainable tourism that benefits local communities while preserving our nation's rich cultural and natural heritage for future generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Empowerment</h3>
                <p className="text-gray-600">
                  We work directly with local communities to ensure tourism benefits reach those who need it most.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Preservation</h3>
                <p className="text-gray-600">
                  We promote tourism that respects and preserves Afghanistan's rich cultural heritage.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Environmental Stewardship</h3>
                <p className="text-gray-600">
                  We advocate for tourism practices that protect Afghanistan's natural landscapes and wildlife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, Afghanistan Tourism emerged from a group of passionate locals who recognized the potential for responsible tourism to contribute to the country's rebuilding efforts. Our founders, with decades of combined experience in hospitality, conservation, and cultural preservation, envisioned a tourism model that would showcase Afghanistan's beauty while directly benefiting local communities.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have developed partnerships with communities across Afghanistan, from the ancient cities of Herat and Balkh to the mountain villages of the Hindu Kush. Our team works tirelessly to create authentic experiences that allow visitors to connect with Afghan culture while ensuring that tourism revenue supports local economies.
              </p>
              <p className="text-gray-600">
                Today, we operate tours in 12 provinces and have directly contributed to the employment of over 500 local guides, artisans, and hospitality workers. We are proud to be part of Afghanistan's journey toward a more sustainable and inclusive future.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty and transparency in all our dealings with travelers, partners, and communities.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  Local communities are at the heart of everything we do, ensuring tourism benefits reach those who need it most.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to preserving Afghanistan's natural and cultural heritage for future generations.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  We provide genuine experiences that allow visitors to connect deeply with Afghan culture and people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Afghanistan Tourism
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Ahmad Farhad</h3>
                <p className="text-green-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With 15 years of experience in hospitality and cultural preservation, Ahmad leads our mission to promote sustainable tourism.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Fatima Noor</h3>
                <p className="text-green-600 mb-3">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Fatima oversees our tour operations and ensures that every visitor has an authentic and memorable experience.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Mohammad Yusuf</h3>
                <p className="text-green-600 mb-3">Community Relations</p>
                <p className="text-gray-600 text-sm">
                  Mohammad works directly with local communities to ensure tourism benefits are distributed fairly and sustainably.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Zahra Khan</h3>
                <p className="text-green-600 mb-3">Marketing Director</p>
                <p className="text-gray-600 text-sm">
                  Zahra leads our efforts to showcase Afghanistan's beauty to the world through compelling storytelling and digital marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;