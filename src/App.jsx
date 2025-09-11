import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">Tourism Afghanistan</h1>
        <p className="text-gray-600 text-center mb-8">
          Discover the beauty and rich heritage of Afghanistan
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Historical Sites</h2>
            <p className="text-gray-600">Explore ancient landmarks and cultural heritage.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Natural Beauty</h2>
            <p className="text-gray-600">Discover mountains, lakes, and pristine landscapes.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
            <h2 className="text-xl font-semibold text-amber-800 mb-2">Local Experiences</h2>
            <p className="text-gray-600">Experience authentic Afghan culture and hospitality.</p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;