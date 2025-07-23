import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Trophy, Target, Users } from 'lucide-react';
import { categories } from '../data/products';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse">
              <span className="text-red-600">APEX</span>
              <br />
              RACING
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Premium F1-inspired streetwear for champions who live life in the fast lane
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/category/tees"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Shop Racing Tees
              </Link>
            </div>
          </div>
        </div>
        
        {/* Racing stripes decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-red-600 via-white to-red-600"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-black transition-colors">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Engineered for speed, designed for champions</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-black transition-colors">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Championship Quality</h3>
              <p className="text-gray-600">Premium materials worthy of the podium</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-black transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Precision Fit</h3>
              <p className="text-gray-600">Tailored for performance and comfort</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-black transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Racing Community</h3>
              <p className="text-gray-600">Join thousands of racing enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Racing <span className="text-red-600">Categories</span>
            </h2>
            <p className="text-xl text-gray-600">Discover our championship collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={category.id} className="group">
                {category.active ? (
                  <Link
                    to={`/category/${category.id}`}
                    className="block bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2 text-red-400">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                      <div className="w-full h-1 bg-red-600 rounded-full"></div>
                    </div>
                  </Link>
                ) : (
                  <div className="block bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600 p-8 rounded-lg transition-all duration-300 shadow-lg cursor-default">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2 text-gray-400">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                      <div className="w-full h-1 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-500 mt-2 block">Coming Soon</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <span className="text-red-600">Race</span>?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join the elite racing community and gear up for victory
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;