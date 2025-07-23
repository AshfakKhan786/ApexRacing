import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button className="bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition-all">
              <Heart className="w-4 h-4" />
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition-all"
            >
              <Eye className="w-4 h-4" />
            </Link>
            <button 
              onClick={handleAddToCart}
              className="bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            RACING
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-red-600">
              ${product.price}
            </span>
            <button 
              onClick={handleAddToCart}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;