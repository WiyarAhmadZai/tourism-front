import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={destination.image || "/images/destination-placeholder.jpg"} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
          {destination.region}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">From ${destination.price}</span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to={`/destination/${destination.id}`}
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
            >
              Explore
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;