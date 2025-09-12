import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Afghanistan Tourism
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Promoting sustainable tourism and showcasing the natural wonders, historical sites, and cultural experiences of Afghanistan
          </motion.p>
        </div>
      </motion.div>
      
      {/* Mission Statement */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Afghanistan Tourism is dedicated to promoting responsible and sustainable tourism that benefits local communities while preserving our nation's rich cultural and natural heritage for future generations.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Empowerment</h3>
                <p className="text-gray-600">
                  We work directly with local communities to ensure tourism benefits reach those who need it most.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Preservation</h3>
                <p className="text-gray-600">
                  We promote tourism that respects and preserves Afghanistan's rich cultural heritage.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Environmental Stewardship</h3>
                <p className="text-gray-600">
                  We advocate for tourism practices that protect Afghanistan's natural landscapes and wildlife.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Our Story */}
      <motion.section 
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Founded in 2020, Afghanistan Tourism emerged from a group of passionate locals who recognized the potential for responsible tourism to contribute to the country's rebuilding efforts. Our founders, with decades of combined experience in hospitality, conservation, and cultural preservation, envisioned a tourism model that would showcase Afghanistan's beauty while directly benefiting local communities.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Over the years, we have developed partnerships with communities across Afghanistan, from the ancient cities of Herat and Balkh to the mountain villages of the Hindu Kush. Our team works tirelessly to create authentic experiences that allow visitors to connect with Afghan culture while ensuring that tourism revenue supports local economies.
              </motion.p>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Today, we operate tours in 12 provinces and have directly contributed to the employment of over 500 local guides, artisans, and hospitality workers. We are proud to be part of Afghanistan's journey toward a more sustainable and inclusive future.
              </motion.p>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Using an image from the public folder */}
              <img 
                src="/images/abstract-architecture-background-brick-194096.jpg" 
                alt="Afghanistan landscape" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Values */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We provide genuine experiences that showcase the real Afghanistan, connecting visitors with local communities and traditions.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Respect",
                description: "We treat all people, cultures, and environments with the utmost respect and consideration.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                )
              },
              {
                title: "Sustainability",
                description: "We are committed to practices that preserve Afghanistan's natural and cultural heritage for future generations.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Inclusivity",
                description: "We believe tourism should benefit all members of society and work to ensure our programs are accessible to everyone.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <div className="text-green-600">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Team */}
      <motion.section 
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals guiding our mission
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmad Farhad",
                position: "Founder & CEO",
                bio: "A visionary leader with 15 years of experience in hospitality and cultural preservation.",
                image: "/images/team1.jpg"
              },
              {
                name: "Fatima Azizi",
                position: "Director of Community Relations",
                bio: "Dedicated to ensuring tourism benefits reach local communities across Afghanistan.",
                image: "/images/team2.jpg"
              },
              {
                name: "Mohammad Yusuf",
                position: "Head of Sustainability",
                bio: "Expert in environmental conservation and sustainable tourism practices.",
                image: "/images/team3.jpg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;