import React from 'react';

import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">QuickBasket</h3>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop solution for quick grocery delivery. Fresh products delivered in just 10 minutes!
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition">Vegetables & Fruits</li>
              <li className="hover:text-green-400 cursor-pointer transition">Dairy Products</li>
              <li className="hover:text-green-400 cursor-pointer transition">Snacks & Beverages</li>
              <li className="hover:text-green-400 cursor-pointer transition">Bakery Items</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition">About Us</li>
              <li className="hover:text-green-400 cursor-pointer transition">Contact Us</li>
              <li className="hover:text-green-400 cursor-pointer transition">FAQs</li>
              <li className="hover:text-green-400 cursor-pointer transition">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@quickbasket.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kangra, Himachal Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 QuickBasket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// FI

export default Footer;