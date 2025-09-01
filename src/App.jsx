import React from 'react';

function App() {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-purple-200 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Youth Skincare
        </h1>

        <p className="text-xl mb-8 text-gray-600">
          Discover your perfect skincare routine for radiant, youthful skin
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors">
            About
          </button>
          
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">
            Products
          </button>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
            Order
          </button>
          
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
            Browse
          </button>
        </div>

        <div className="mt-12 rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/src/images/download.jpg" 
            alt="DEW, WELLO, AVERDRO, SAAKITUP skincare products"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;