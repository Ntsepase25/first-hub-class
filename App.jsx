import React from "react";
import "./App.css";
import background from "./background.jpeg";
import skincare from "./skincare.jpeg";
import download from "./download.jpeg";

function App() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-6xl font-bold mb-4">Radiant Skin Naturally</h1>
      <p className="text-lg mb-8">
        Discover the secret to glowing, healthy skin with our natural products.
      </p>
      <div className="flex space-x-6 mb-8">
        <button className="px-8 py-4 bg-pink-500 text-lg font-semibold rounded-xl hover:bg-pink-600 transition">
          Shop Now
        </button>
        <button className="px-8 py-4 bg-green-500 text-lg font-semibold rounded-xl hover:bg-green-600 transition">
          Discover Ingredients
        </button>
      </div>
      <div className="flex space-x-6">
        <img src={skincare} alt="Skincare" className="w-48 h-48 rounded-2xl shadow-lg" />
        <img src={download} alt="Product" className="w-48 h-48 rounded-2xl shadow-lg" />
      </div>
    </div>
  );
}

export default App;
