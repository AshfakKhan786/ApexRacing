import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, List, Filter, SlidersHorizontal } from 'lucide-react';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/UI/ProductCard';

const Category = () => {
  const { categoryId } = useParams();
  const [viewMode, setViewMode] = React.useState('grid');
  const [sortBy, setSortBy] = React.useState('name');
  
  const products = getProductsByCategory(categoryId || 'tees');
  
  const categoryNames = {
    'tees': 'Racing Tees',
    'jackets': 'Speed Jackets',
    'caps': 'Track Caps',
    'accessories': 'Pit Accessories',
    'limited': 'Limited Edition'
  };

  const categoryName = categoryNames[categoryId || 'tees'] || 'Products';

  const sortedProducts = React.useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
      default:
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [products, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {categoryName}
            </h1>
            <p className="text-gray-600">
              {products.length} products in this category
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white px-4 py-2 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            
            {/* View Mode Toggle */}
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
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Category Banner */}
        <div className="bg-gradient-to-r from-black to-red-900 text-white rounded-lg p-8 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Premium {categoryName}
            </h2>
            <p className="text-gray-300">
              Experience the thrill of racing with our premium {categoryName.toLowerCase()}. 
              Each piece is crafted for champions who demand excellence both on and off the track.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <SlidersHorizontal className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              This category is currently being stocked with amazing racing gear!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;