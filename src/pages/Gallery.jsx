import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedMedia, setSelectedMedia] = useState(null);
  
  // Using images from the public folder
  const photos = [
    { id: 1, src: "/images/IMG_3605.JPG", alt: "Bamiyan Valley landscape" },
    { id: 2, src: "/images/IMG_3612.JPG", alt: "Herat Citadel" },
    { id: 3, src: "/images/IMG_3614.JPG", alt: "Kabul Museum" },
    { id: 4, src: "/images/IMG_3623.JPG", alt: "Band-e-Amir lakes" },
    { id: 5, src: "/images/IMG_3624.JPG", alt: "Blue Mosque interior" },
    { id: 6, src: "/images/IMG_3628.JPG", alt: "Afghan traditional market" },
    { id: 7, src: "/images/IMG_3629.JPG", alt: "Mountain landscape" },
    { id: 8, src: "/images/wp11994780.jpg", alt: "Ancient Buddhist statue" },
    { id: 9, src: "/images/wp5419943.jpg", alt: "Local craftsman" }
  ];
  
  // Using videos from the public folder
  const videos = [
    { id: 1, src: "/videos/مکان های تاریخی افغانستان زیبا historical places of Afghanistan.mp4", thumbnail: "/images/blue-water-body-autumn-nature-xz.jpg", alt: "Bamiyan Valley aerial view" },
    { id: 2, src: "/videos/مکان های تاریخی افغانستان زیبا historical places of Afghanistan.mp4", thumbnail: "/images/castle-1071188.jpg", alt: "Kabul city tour" },
    { id: 3, src: "/videos/مکان های تاریخی افغانستان زیبا historical places of Afghanistan.mp4", thumbnail: "/images/forest-with-sunlight-158251.jpg", alt: "Traditional Afghan music" },
    { id: 4, src: "/videos/مکان های تاریخی افغانستان زیبا historical places of Afghanistan.mp4", thumbnail: "/images/architecture-art-bridge-cliff-459203.jpg", alt: "Herat historical sites" }
  ];

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
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the beauty of Afghanistan through our collection of photos and videos
          </motion.p>
        </div>
      </motion.div>
      
      {/* Gallery Content */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 rounded-md text-sm font-medium ${
                  activeTab === 'photos'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-md text-sm font-medium ${
                  activeTab === 'videos'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Videos
              </button>
            </div>
          </motion.div>
          
          {/* Photos Grid */}
          {activeTab === 'photos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photos.map((photo, index) => (
                  <motion.div 
                    key={photo.id} 
                    className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                    onClick={() => setSelectedMedia(photo)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <svg 
                        className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <motion.div 
                    key={video.id} 
                    className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                    onClick={() => setSelectedMedia(video)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.alt} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg 
                          className="w-8 h-8 text-white ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
      
      {/* Lightbox Modal */}
      {selectedMedia && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedMedia(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {photos.find(photo => photo.id === selectedMedia.id) ? (
              <img 
                src={selectedMedia.src} 
                alt={selectedMedia.alt} 
                className="max-h-[80vh] max-w-full object-contain"
              />
            ) : (
              <div className="relative">
                <video 
                  src={selectedMedia.src} 
                  controls 
                  className="max-h-[80vh] max-w-full"
                  autoPlay
                  loop
                />
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <p className="text-center">{selectedMedia.alt}</p>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Categories */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our collection by different themes and locations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Historical Sites",
                description: "Ancient monuments and archaeological wonders",
                image: "/images/historical-sites.jpg",
                count: "42 photos"
              },
              {
                title: "Natural Landscapes",
                description: "Mountains, lakes, and breathtaking natural beauty",
                image: "/images/natural-landscapes.jpg",
                count: "38 photos"
              },
              {
                title: "Cultural Experiences",
                description: "Traditional festivals, crafts, and local life",
                image: "/images/cultural-experiences.jpg",
                count: "56 photos"
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{category.count}</span>
                    <button 
                      onClick={() => setActiveTab('photos')}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Gallery;