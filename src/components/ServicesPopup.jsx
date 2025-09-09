// src/components/servicePopup.jsx
import React from "react";

const ServicePopup = ({ isServices }) => {
  return (
    // Adjusted top, removed -translate-y-1/2, added z-50
    <div className="fixed top-[80px] left-1/2 -translate-x-1/2 flex bg-white shadow-xl p-6 rounded-lg gap-6 z-[100]"> {/* Increased z-index */}
      {isServices ? (
        <>
          {/* Design card */}
          <div className="bg-pink-100 p-6 rounded-md w-64 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-4">Design.</h3>
              <p className="text-gray-600">Handcraft the user experience.</p>
            </div>
            <span className="self-end text-3xl font-bold text-gray-400">&rarr;</span>
          </div>
          {/* Technology card */}
          <div className="bg-indigo-100 p-6 rounded-md w-64 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-4">Technology.</h3>
              <p className="text-gray-600">Leverage the power of code.</p>
            </div>
            <span className="self-end text-3xl font-bold text-gray-400">&rarr;</span>
          </div>
          {/* Marketing card */}
          <div className="bg-purple-100 p-6 rounded-md w-64 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-4">Marketing.</h3>
              <p className="text-gray-600">Creative strategies for brands.</p>
            </div>
            <span className="self-end text-3xl font-bold text-gray-400">&rarr;</span>
          </div>
        </>
      ) : (
        <>
          {/* About Us cards */}
          <div className="bg-gray-100 p-6 rounded-md w-64 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-4">About Us.</h3>
              <p className="text-gray-600">Learn about our mission and values.</p>
            </div>
            <span className="self-end text-3xl font-bold text-gray-400">&rarr;</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-md w-64 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-4">Our Team.</h3>
              <p className="text-gray-600">Meet the people behind the magic.</p>
            </div>
            <span className="self-end text-3xl font-bold text-gray-400">&rarr;</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicePopup;