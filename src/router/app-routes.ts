export enum AppRoute {
  HOME = '',
  LOGIN = 'login',
  CART = 'cart',
}

export const getLink = (route: AppRoute) =>
  `${process.env.ASSET_PREFIX ?? ''}/${route}`;
