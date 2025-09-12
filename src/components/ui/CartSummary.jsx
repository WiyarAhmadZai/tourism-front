import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from './Button';

const CartSummary = () => {
  const { cartItems, cartTotal, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-800">{item.name}</h3>
            <p className="text-gray-600 text-sm">${item.price}</p>
          </div>
          <Button 
            variant="danger" 
            size="sm" 
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      ))}
      
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Total: ${cartTotal}</span>
          <Button variant="primary">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;