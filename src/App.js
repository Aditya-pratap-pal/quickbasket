import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
    }
  };

  const handleRemoveItem = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleLoginClick = () => {
    if (user) {
      const confirm = window.confirm('Do you want to logout?');
      if (confirm) {
        setUser(null);
        setCart([]);
      }
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cart={cart} user={user} onLoginClick={handleLoginClick} onCartClick={() => setShowCart(true)} />
      <HeroBanner />
      <Categories onCategoryClick={(cat) => console.log(cat)} />
      <ProductGrid onAddToCart={handleAddToCart} />
      <Footer />
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} 
        onSwitchToSignup={() => { setShowLogin(false); setShowSignup(true); }}
        onLoginSuccess={(u) => { setUser(u); setShowLogin(false); }} />
      <Signup isOpen={showSignup} onClose={() => setShowSignup(false)}
        onSwitchToLogin={() => { setShowSignup(false); setShowLogin(true); }}
        onSignupSuccess={(u) => { setUser(u); setShowSignup(false); }} />
      <Cart isOpen={showCart} onClose={() => setShowCart(false)} cart={cart}
        onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />
    </div>
  );
}