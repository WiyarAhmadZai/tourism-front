import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Profile updated:', profileData);
    setIsEditing(false);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
        <motion.button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </motion.button>
      </div>

      {isEditing ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                name="address"
                value={profileData.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Save Changes
            </motion.button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">{user?.name || 'User Name'}</h3>
              <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex">
              <span className="font-medium text-gray-700 w-32">Full Name:</span>
              <span className="text-gray-600">{user?.name || 'Not provided'}</span>
            </div>
            <div className="flex">
              <span className="font-medium text-gray-700 w-32">Email:</span>
              <span className="text-gray-600">{user?.email || 'Not provided'}</span>
            </div>
            <div className="flex">
              <span className="font-medium text-gray-700 w-32">Phone:</span>
              <span className="text-gray-600">{user?.phone || 'Not provided'}</span>
            </div>
            <div className="flex">
              <span className="font-medium text-gray-700 w-32">Address:</span>
              <span className="text-gray-600">{user?.address || 'Not provided'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UserProfile;