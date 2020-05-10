import { AppAction } from '../../../types';

export const ADD_PRODUCT = 'cart/add-product';
export const REMOVE_PRODUCT = 'cart/remove-product';
export const SET_PRODUCTS = 'cart/set-products';

export interface ProductInfo {
  id: string;
  total: number;
}

export type CartActionTypes =
  | AppAction<typeof ADD_PRODUCT, { product: ProductInfo }>
  | AppAction<typeof REMOVE_PRODUCT, { id: string }>
  | AppAction<typeof SET_PRODUCTS, { products: ProductInfo[] }>;

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
