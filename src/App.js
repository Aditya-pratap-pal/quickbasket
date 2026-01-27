import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLoginClick = () => {
    alert('Login functionality coming soon!');
  };

  const handleCartClick = () => {
    alert(`You have ${cart.length} items in your cart!`);
  };

  const handleCategoryClick = (category) => {
    console.log('Selected category:', category.name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cart={cart} 
        onLoginClick={handleLoginClick} 
        onCartClick={handleCartClick} 
      />
      <HeroBanner />
      <Categories onCategoryClick={handleCategoryClick} />
      <ProductGrid onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

