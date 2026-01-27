import React from 'react';


const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Groceries delivered in <span className="text-green-600">10 minutes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Fresh vegetables, fruits, dairy & more at your doorstep
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition">
              Order Now
            </button>
          </div>
          <div className="flex justify-center">
            <div className="text-8xl md:text-9xl">
              🛒🥬🍎🥛
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;