import React from 'react';


const Categories = ({ onCategoryClick }) => {
  const categories = [
    { id: 1, name: 'Vegetables & Fruits', icon: '🥬', color: 'bg-green-100' },
    { id: 2, name: 'Dairy & Breakfast', icon: '🥛', color: 'bg-blue-100' },
    { id: 3, name: 'Munchies', icon: '🍪', color: 'bg-yellow-100' },
    { id: 4, name: 'Cold Drinks & Juices', icon: '🥤', color: 'bg-red-100' },
    { id: 5, name: 'Instant & Frozen Food', icon: '🍕', color: 'bg-purple-100' },
    { id: 6, name: 'Tea, Coffee & Health', icon: '☕', color: 'bg-orange-100' },
    { id: 7, name: 'Bakery & Biscuits', icon: '🍰', color: 'bg-pink-100' },
    { id: 8, name: 'Sweet Tooth', icon: '🍬', color: 'bg-indigo-100' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onCategoryClick(category)}
            className={`${category.color} rounded-xl p-4 text-center cursor-pointer hover:shadow-lg transition-all hover:scale-105`}
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <div className="text-sm font-medium text-gray-700">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;