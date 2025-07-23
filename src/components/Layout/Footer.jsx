import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-600">APEX</span> RACING
            </h3>
            <p className="text-gray-400 mb-4">
              Premium F1-inspired streetwear for racing enthusiasts who live life in the fast lane.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/category/tees" className="text-gray-400 hover:text-white transition-colors">Racing Tees</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Speed Jackets</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Track Caps</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Limited Edition</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Monaco Grand Prix Street</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@apexracing.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Apex Racing. All rights reserved. Built for speed, styled for the podium.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;