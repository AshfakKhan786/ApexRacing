import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { state } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-black text-white border-b-4 border-red-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight hover:text-red-500 transition-colors">
            <span className="text-red-600">APEX</span> RACING
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-red-500 transition-colors ${isActive('/') ? 'text-red-500' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-red-500 transition-colors ${isActive('/products') ? 'text-red-500' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/category/tees" 
              className={`hover:text-red-500 transition-colors ${isActive('/category/tees') ? 'text-red-500' : ''}`}
            >
              Racing Tees
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-red-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            
            <Link to="/cart" className="relative p-2 hover:text-red-500 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 hover:text-red-500 transition-colors">
                  <User className="w-5 h-5" />
                  <span className="hidden md:inline">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-2">
                    <button
                      onClick={logout}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-2 p-2 hover:text-red-500 transition-colors">
                <User className="w-5 h-5" />
                <span className="hidden md:inline">Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;