import React, { createContext, useState, useEffect } from 'react';
import api, { getCart, addToCart as apiAddToCart, removeFromCart as apiRemoveFromCart, clearCart as apiClearCart } from '../services/api';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items on initial load
  useEffect(() => {
    fetchCart();
  }, []);

  // Fetch cart items from API
  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getCart();
      setCartItems(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch cart');
      console.error('Cart fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = async (item) => {
    try {
      setError(null);
      const response = await apiAddToCart(item);
      setCartItems(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add item to cart');
      throw err;
    }
  };

  // Remove item from cart
  const removeFromCart = async (id) => {
    try {
      setError(null);
      const response = await apiRemoveFromCart(id);
      setCartItems(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to remove item from cart');
      throw err;
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      setError(null);
      const response = await apiClearCart();
      setCartItems(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to clear cart');
      throw err;
    }
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price || 0), 0);

  // Context value
  const value = {
    cartItems,
    loading,
    error,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal,
    fetchCart
  };

  return (
    <CartContext.Provider value={value}>
      {!loading && children}
    </CartContext.Provider>
  );
};