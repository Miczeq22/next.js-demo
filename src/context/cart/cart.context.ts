import React from 'react';
import { CartState, CartActionTypes } from './cart.reducer';

export type CartStateApi = {
  state: CartState;
  dispatch: React.Dispatch<CartActionTypes>;
};

export const cartInitialState: CartState = {
  products: [],
};

export const CartContext = React.createContext<CartState | CartStateApi>(
  cartInitialState
);
