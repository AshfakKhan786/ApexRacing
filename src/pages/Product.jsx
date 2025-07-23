import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Heart, Share2, Star, ShoppingCart, Minus, Plus, X } from 'lucide-react';
import { products, searchProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/UI/ProductCard';

const Product = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState('M');
  
  const product = products.find(p => p.id === productId);
  const filteredProducts = searchProducts(searchQuery, products);
  const searchResults = searchQuery ? filteredProducts.filter(p => p.id !== productId) : [];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-red-600 hover:text-red-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 w-5 h-5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          
          {/* Search Results */}
          {searchQuery && (
            <div>
              {searchResults.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Search Results ({searchResults.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {searchResults.slice(0, 3).map((searchProduct) => (
                      <div key={searchProduct.id} className="border rounded-lg p-4">
                        <img
                          src={searchProduct.image}
                          alt={searchProduct.name}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                        <h4 className="font-medium text-sm mb-1">{searchProduct.name}</h4>
                        <p className="text-red-600 font-bold">${searchProduct.price}</p>
                        <Link
                          to={`/product/${searchProduct.id}`}
                          className="mt-2 block bg-red-600 text-white text-center py-1 rounded text-sm hover:bg-red-700 transition-colors"
                        >
                          View Product
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No products match "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                  RACING
                </span>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white text-gray-600 p-2 rounded-full shadow-lg hover:text-red-600 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-600 p-2 rounded-full shadow-lg hover:text-red-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(47 reviews)</span>
                </div>
                <p className="text-4xl font-bold text-red-600 mb-4">
                  ${product.price}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-red-600 bg-red-600 text-white'
                          : 'border-gray-300 hover:border-red-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-gray-600">In stock</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all">
                  Buy Now
                </button>
              </div>

              {/* Product Features */}
              <div className="mt-8 pt-8 border-t">
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium cotton blend fabric</li>
                  <li>• Racing-inspired design</li>
                  <li>• Machine washable</li>
                  <li>• Free shipping on orders over $100</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            You might also <span className="text-red-600">like</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;