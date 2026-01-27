import React from 'react';
import { Plus } from 'lucide-react';
import ProductCard from './ProductCard';
// Note: ProductGrid imports ProductCard, so you'll need ProductCard component


const ProductGrid = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Fresh Tomatoes', price: 45, unit: '1 kg', image: '🍅', category: 'Vegetables' },
    { id: 2, name: 'Amul Taaza Milk', price: 28, unit: '500 ml', image: '🥛', category: 'Dairy' },
    { id: 3, name: 'Lay\'s Chips', price: 20, unit: '1 pack', image: '🍟', category: 'Snacks' },
    { id: 4, name: 'Coca Cola', price: 40, unit: '750 ml', image: '🥤', category: 'Beverages' },
    { id: 5, name: 'Fresh Bananas', price: 50, unit: '1 dozen', image: '🍌', category: 'Fruits' },
    { id: 6, name: 'Bread', price: 35, unit: '1 loaf', image: '🍞', category: 'Bakery' },
    { id: 7, name: 'Fresh Spinach', price: 30, unit: '500 g', image: '🥬', category: 'Vegetables' },
    { id: 8, name: 'Butter', price: 55, unit: '200 g', image: '🧈', category: 'Dairy' },
    { id: 9, name: 'Fresh Apples', price: 120, unit: '1 kg', image: '🍎', category: 'Fruits' },
    { id: 10, name: 'Orange Juice', price: 80, unit: '1 liter', image: '🧃', category: 'Beverages' },
    { id: 11, name: 'Cookies', price: 40, unit: '1 pack', image: '🍪', category: 'Snacks' },
    { id: 12, name: 'Fresh Eggs', price: 60, unit: '12 pieces', image: '🥚', category: 'Dairy' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Popular Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;