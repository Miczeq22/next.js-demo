import React from 'react';
import { cartInitialState, CartContext } from '../context/cart/cart.context';
import { cartReducer } from '../context/cart/cart.reducer';
import { productStorage } from '../context/cart/cart.storage';
import { setProductsInCart } from '../context/cart/cart.action-creators';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(cartReducer, cartInitialState);

  React.useEffect(() => {
    const products = productStorage.getProducts() ?? [];
    dispatch(setProductsInCart(products));
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
