import React from 'react';
import backgroundImage from './background.jpeg';
import foregroundSmall from './download.jpeg';
import foregroundLarge from './skincare.jpeg';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Foreground images and heading/buttons */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-start gap-6 px-6 md:px-12 lg:px-24 z-10">
        
        {/* Smaller product image */}
        <div className="relative w-32 sm:w-40 md:w-44 lg:w-48 flex-shrink-0 mt-16 md:mt-24">
          <img
            src={foregroundSmall}
            alt="Secondary Product"
            className="rounded-lg shadow-lg w-full"
          />
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/30 to-white/50 hover:from-white/50 hover:to-white/70 text-pink-600 hover:text-pink-800 font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-base sm:text-lg">
            Discover Ingredients
          </button>
        </div>

        {/* Main product image with heading, subtitle, and Shop Now */}
        <div className="relative w-52 sm:w-72 md:w-80 lg:w-96 flex flex-col items-center md:items-start mt-12 md:mt-0">
          <img
            src={foregroundLarge}
            alt="Main Product"
            className="rounded-lg shadow-2xl w-full"
          />
          {/* Heading */}
          <h1 className="absolute top-2 md:top-0 left-1/2 md:left-4 transform -translate-x-1/2 md:translate-x-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-2xl text-center md:text-left">
            Radiant Skin, Naturally
          </h1>
          {/* Subtitle */}
          <p className="absolute top-24 md:top-28 left-1/2 md:left-4 transform -translate-x-1/2 md:translate-x-0 text-lg sm:text-xl md:text-2xl font-medium drop-shadow-lg text-center md:text-left max-w-md">
            Discover the power of natural ingredients for glowing, healthy skin.
          </p>
          {/* Shop Now button */}
          <button className="absolute bottom-6 left-1/2 md:left-4 transform -translate-x-1/2 md:translate-x-0 bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-bold px-8 py-4 rounded-full shadow-xl text-lg sm:text-xl transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 w-full flex justify-center animate-bounce z-20">
        <span className="text-3xl sm:text-4xl">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
