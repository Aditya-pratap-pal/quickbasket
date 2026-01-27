import React from 'react';

import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow">
      <div className="text-6xl mb-3 text-center">{product.image}</div>
      <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.unit}</p>
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-gray-800">₹{product.price}</div>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;