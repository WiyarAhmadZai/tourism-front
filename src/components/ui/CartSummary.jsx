import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CartSummary = ({ items = [], onCheckout, onRemoveItem }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Summary</h2>
      
      {items.length === 0 ? (
        <p className="text-gray-600 text-center py-8">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex justify-between items-center pb-4 border-b border-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-800 mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (10%):</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
          
          <Button
            onClick={onCheckout}
            variant="primary"
            size="lg"
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </motion.div>
  );
};

export default CartSummary;