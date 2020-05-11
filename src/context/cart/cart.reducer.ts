import { AppAction } from '../../../types';

export const ADD_PRODUCT = 'cart/add-product';
export const REMOVE_PRODUCT = 'cart/remove-product';
export const SET_PRODUCTS = 'cart/set-products';
export const SET_PRODUCT_AMOUNT = 'cart/set-product-amount';

export interface ProductInfo {
  id: string;
  amount: number;
}

export type CartActionTypes =
  | AppAction<typeof ADD_PRODUCT, { product: ProductInfo }>
  | AppAction<typeof REMOVE_PRODUCT, { id: string }>
  | AppAction<typeof SET_PRODUCTS, { products: ProductInfo[] }>
  | AppAction<typeof SET_PRODUCT_AMOUNT, { product: ProductInfo }>;

export interface CartState {
  products: ProductInfo[];
}

export const cartReducer = (
  state: CartState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        products: [...state.products, action.product],
      };
    }

    case REMOVE_PRODUCT: {
      return {
        products: state.products.filter((product) => product.id !== action.id),
      };
    }

    case SET_PRODUCTS: {
      return {
        products: action.products,
      };
    }

    default:
      return state;
  }
};
