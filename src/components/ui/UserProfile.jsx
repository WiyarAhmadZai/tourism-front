import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Button from './Button';

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">You are not logged in</p>
        <div className="space-x-4">
          <Button variant="primary" onClick={() => window.location.href = '/login'}>
            Login
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/register'}>
            Register
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button variant="primary" className="w-full" onClick={() => window.location.href = '/profile'}>
          View Profile
        </Button>
        <Button variant="outline" className="w-full" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;