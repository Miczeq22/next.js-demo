import { ProductInfo } from './cart.reducer';

const PRODUCTS_KEY = 'products';

export class ProductStorage {
  private products: ProductInfo[];

  constructor() {
    try {
      const products = localStorage.getItem(PRODUCTS_KEY);

      if (products) {
        this.products = JSON.parse(products);
      } else {
        this.products = [];
      }
    } catch {
      this.products = [];
    }
  }

  public setProducts(products: ProductInfo[]) {
    this.products = products;

    try {
      if (products) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
      } else {
        localStorage.removeItem(PRODUCTS_KEY);
      }
    } catch {}
  }

  public getProducts() {
    return this.products;
  }
}

export const productStorage = new ProductStorage();
