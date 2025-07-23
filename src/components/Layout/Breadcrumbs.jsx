import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbMap = {
    'products': 'All Products',
    'category': 'Category',
    'tees': 'Racing Tees',
    'product': 'Product',
    'cart': 'Shopping Cart',
    'login': 'Sign In',
    'signup': 'Sign Up',
    'forgot-password': 'Reset Password'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-gray-100 px-4 py-3">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-gray-600 hover:text-red-600 transition-colors">
            Home
          </Link>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <React.Fragment key={pathname}>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="text-red-600 font-medium">{displayName}</span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;