import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.image || "/images/destination-placeholder.jpg"} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {destination.region}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">From ${destination.price}</span>
          <Link 
            to={`/destination/${destination.id}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Explore
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;