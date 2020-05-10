import {
  ProductInfo,
  CartActionTypes,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
} from './cart.reducer';

export const addProductToCart = (product: ProductInfo): CartActionTypes => ({
  product,
  type: ADD_PRODUCT,
});

export const removeProductFromCart = (id: string): CartActionTypes => ({
  id,
  type: REMOVE_PRODUCT,
});

export const setProductsInCart = (
  products: ProductInfo[]
): CartActionTypes => ({
  products,
  type: SET_PRODUCTS,
});
