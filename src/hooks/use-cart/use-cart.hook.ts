import React from 'react';
import { CartStateApi, CartContext } from '../../context/cart/cart.context';

export const useCart = (): CartStateApi => {
  const context = React.useContext(CartContext) as CartStateApi;

  if (!context) {
    throw new Error('useCart should be used within CartProvider.');
  }

  return context;
};
