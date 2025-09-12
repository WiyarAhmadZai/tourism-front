import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Welcome to Afghanistan Tourism</h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover the beauty and rich heritage of Afghanistan
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/destinations" 
            className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Explore Destinations
          </a>
          <a 
            href="/packages" 
            className="bg-accent hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            View Packages
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
