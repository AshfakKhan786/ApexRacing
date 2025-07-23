import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, Filter } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/UI/ProductCard';

const Products = () => {
  const [viewMode, setViewMode] = React.useState('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              All <span className="text-red-600">Products</span>
            </h1>
            <p className="text-gray-600">Discover our complete racing collection</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-l-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-r-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Categories CTA */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore by <span className="text-red-600">Category</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Find exactly what you're looking for in our specialized collections
            </p>
            <Link
              to="/category/tees"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Shop Racing Tees
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;