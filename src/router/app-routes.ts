export enum AppRoute {
  HOME = '',
  LOGIN = 'login',
  CART = 'cart',
  PRODUCTS = 'products',
}

export const getLink = (route: AppRoute) =>
  `${process.env.ASSET_PREFIX ?? ''}/${route}`;

export const getProductLink = (productID: string) =>
  `${process.env.ASSET_PREFIX}/${AppRoute.PRODUCTS}/${productID}`;
