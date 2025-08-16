// App.jsx
import React from "react";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Build Modern Interfaces with React & Tailwind
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-200 mb-8">
          A simple hero section showcasing layout, fonts, and color balance.
          Designed to demonstrate my understanding of React components and
          Tailwind CSS styling.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="bg-indigo-800 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-indigo-900 transition">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="mt-10">
          <img
            src="./hero-image.png"
            alt="Hero section illustration"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
