import React, { useState } from 'react';
import { ShoppingCart, Search, MapPin, User } from 'lucide-react';


const Navbar = ({ cart,user, onLoginClick, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-green-600">🛒 QuickBasket</div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
            <MapPin className="w-4 h-4 text-gray-600" />
            <div>
              <div className="font-medium text-gray-800">Delivery in 10 minutes</div>
              <div className="text-gray-500 text-xs">Kangra, Himachal Pradesh</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Login & Cart */}
          <div className="flex items-center gap-4">
            <button 
  onClick={onLoginClick}
  className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-green-600 transition"
>
  <User className="w-5 h-5" />
  <span>{user ? user.name : 'Login'}</span>
</button>
            <button 
              onClick={onCartClick}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">My Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;