import React from 'react';
import { motion } from 'framer-motion';

const Map = ({ locations = [], center, zoom = 10 }) => {
  return (
    <motion.div
      className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-96"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
          <p className="text-gray-600">Map integration would be implemented here</p>
          <p className="text-sm text-gray-500 mt-2">Using Google Maps or Leaflet.js</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Map;