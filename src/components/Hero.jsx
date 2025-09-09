// src/components/Hero.jsx
import React from "react";
import Client from "./Clients"; // Corrected import to singular 'Client'
import bottomLeftIcon from "../assets/cookie.png"; // Icon at the bottom-left

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between py-24 px-6 md:px-20 relative min-h-screen">
      {/* Left animation */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mr-8 mb-10 md:mb-0">
        <div className="relative w-96 h-96">
          {/* Central node - Black */}
          <span className="absolute w-3 h-3 bg-black rounded-full" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

          {/* Inner circle of nodes - Black */}
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={`inner-${i}`}
              className="absolute w-2.5 h-2.5 bg-black rounded-full animate-pulse"
              style={{
                top: `${50 + 20 * Math.sin(2 * Math.PI * i / 5)}%`,
                left: `${50 + 20 * Math.cos(2 * Math.PI * i / 5)}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}

          {/* Middle circle of nodes - Red & Purple */}
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={`middle-${i}`}
              className={`absolute w-3 h-3 rounded-full animate-pulse ${i % 2 === 0 ? 'bg-red-500' : 'bg-purple-500'}`}
              style={{
                top: `${50 + 35 * Math.sin(2 * Math.PI * i / 8)}%`,
                left: `${50 + 35 * Math.cos(2 * Math.PI * i / 8)}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.15 + 0.5}s`
              }}
            />
          ))}

          {/* Outer circle of nodes - Purple & Blue */}
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={`outer-${i}`}
              className={`absolute w-3 h-3 rounded-full animate-pulse ${i % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'}`}
              style={{
                top: `${50 + 48 * Math.sin(2 * Math.PI * i / 14)}%`,
                left: `${50 + 48 * Math.cos(2 * Math.PI * i / 14)}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.2 + 1}s`
              }}
            />
          ))}

          {/* Dotted lines simulation (rotating borders) */}
          <div className="absolute inset-0 border border-dotted border-gray-400 rounded-full animate-spin-slow-reverse" style={{ transform: 'scale(0.8)' }}></div>
          <div className="absolute inset-0 border border-dotted border-gray-400 rounded-full animate-spin-slow"></div>

        </div>
      </div>

      {/* Right text */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
          Design <br /> Transform <br /> Accelerate
        </h1>
        <p className="mt-6 text-xl text-gray-800">
          Redefining user experiences through <br />
          Behavioural Science & AI
        </p>
      </div>

      {/* Main bottom container for text and client logos */}
      <div className="absolute bottom-10 left-0 right-0 px-6 md:px-20 flex items-center w-full">
        {/* Left section: "Your trusted UI UX design agency." and icon */}
        <div className="flex items-center space-x-4">
          <img src={bottomLeftIcon} alt="UI UX icon" className="w-8 h-8" />
          <p className="text-lg text-gray-800 whitespace-nowrap">Your trusted UI UX design agency.</p>
        </div>

        {/* Client logos positioned after the text, with a margin for separation */}
        <div className="flex-grow ml-12 overflow-hidden">
          <Client />
        </div>
      </div>
    </section>
  );
};

export default Hero;