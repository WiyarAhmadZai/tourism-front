import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedMedia, setSelectedMedia] = useState(null);
  
  // Dummy data for gallery
  const photos = [
    { id: 1, src: "/images/gallery1.jpg", alt: "Bamiyan Valley landscape" },
    { id: 2, src: "/images/gallery2.jpg", alt: "Herat Citadel" },
    { id: 3, src: "/images/gallery3.jpg", alt: "Kabul Museum" },
    { id: 4, src: "/images/gallery4.jpg", alt: "Band-e-Amir lakes" },
    { id: 5, src: "/images/gallery5.jpg", alt: "Blue Mosque interior" },
    { id: 6, src: "/images/gallery6.jpg", alt: "Afghan traditional market" },
    { id: 7, src: "/images/gallery7.jpg", alt: "Mountain landscape" },
    { id: 8, src: "/images/gallery8.jpg", alt: "Ancient Buddhist statue" },
    { id: 9, src: "/images/gallery9.jpg", alt: "Local craftsman" }
  ];
  
  const videos = [
    { id: 1, src: "/videos/gallery1.mp4", thumbnail: "/images/video-thumb1.jpg", alt: "Bamiyan Valley aerial view" },
    { id: 2, src: "/videos/gallery2.mp4", thumbnail: "/images/video-thumb2.jpg", alt: "Kabul city tour" },
    { id: 3, src: "/videos/gallery3.mp4", thumbnail: "/images/video-thumb3.jpg", alt: "Traditional Afghan music" },
    { id: 4, src: "/videos/gallery4.mp4", thumbnail: "/images/video-thumb4.jpg", alt: "Herat historical sites" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore the beauty of Afghanistan through our collection of photos and videos
          </p>
        </div>
      </div>
      
      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
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
          </div>
          
          {/* Photos Grid */}
          {activeTab === 'photos' && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                    onClick={() => setSelectedMedia(photo)}
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
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <div 
                    key={video.id} 
                    className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                    onClick={() => setSelectedMedia(video)}
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {selectedMedia.src.endsWith('.mp4') ? (
              <div>
                <video 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-[80vh]"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-white text-center mt-4 text-lg">{selectedMedia.alt}</p>
              </div>
            ) : (
              <div>
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.alt} 
                  className="max-w-full max-h-[80vh]"
                />
                <p className="text-white text-center mt-4 text-lg">{selectedMedia.alt}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;