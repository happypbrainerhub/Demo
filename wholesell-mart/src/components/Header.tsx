'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, User, Search, Menu, X, Heart, Package } from 'lucide-react';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 Customer Care: 1800-123-4567</span>
            <span>📧 support@wholesellmart.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>🚚 Free Delivery on orders above ₹499</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Wholesell Mart</h1>
              <p className="text-xs text-gray-500">Your Shopping Paradise</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Wishlist */}
            <Link href="/wishlist" className="hidden md:flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs mt-1">Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* User Account */}
            <div className="relative">
              {isAuthenticated ? (
                <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <User className="h-6 w-6" />
                  <span className="text-xs mt-1">{user?.name}</span>
                </div>
              ) : (
                <Link href="/login" className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <User className="h-6 w-6" />
                  <span className="text-xs mt-1">Login</span>
                </Link>
              )}

              {/* User Dropdown */}
              {isAuthenticated && isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    My Profile
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    My Orders
                  </Link>
                  <Link href="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Wishlist
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-3 overflow-x-auto">
            <Link href="/category/electronics" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">
              Electronics
            </Link>
            <Link href="/category/fashion" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">
              Fashion
            </Link>
            <Link href="/category/home" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">
              Home & Kitchen
            </Link>
            <Link href="/category/books" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">
              Books
            </Link>
            <Link href="/category/sports" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">
              Sports
            </Link>
            <Link href="/category/beauty" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">
              Beauty
            </Link>
            <Link href="/deals" className="text-red-600 font-semibold hover:text-red-700 whitespace-nowrap">
              Today's Deals
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

