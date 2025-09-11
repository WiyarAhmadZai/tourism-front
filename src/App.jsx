import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to React with Tailwind CSS</h1>
        <p className="text-gray-600 text-center mb-8">
          Your React application with Tailwind CSS is ready to go!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-red-400 rounded-lg h-16"></div>
          <div className="bg-green-400 rounded-lg h-16"></div>
          <div className="bg-blue-400 rounded-lg h-16"></div>
        </div>
      </div>
    </div>
  );
}

export default App;