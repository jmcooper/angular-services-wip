import { Inject, Injectable, InjectionToken, computed, signal } from "@angular/core";
import { Product } from "../catalog/product.model";

export const CART_SERVICE_TOKEN =
  new InjectionToken<CartService>("CART_SERVICE");

export const CART_OPTIONS_TOKEN = new InjectionToken<CartOptions>("CART_OPTIONS");

export type CartOptions = {
  persistenceType: string,
};

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = signal<Product[]>([]);

  constructor(@Inject(CART_OPTIONS_TOKEN) private cartOptions: CartOptions) {
    if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
      const cartString = localStorage.getItem('cart');
      const cart: Product[] = cartString
        ? JSON.parse(cartString) as Product[]
        : [];

      this.cartItems.set(cart);
    }
  }

  get cart() {
    return this.cartItems.asReadonly();
  }

  add(product: Product) {
    this.cartItems.update((oldCart) => [...oldCart, product]);
    this.storeCart();
  }

  remove(product: Product) {
    this.cartItems.update((oldCart) => oldCart.filter((p) => p !== product));
    this.storeCart();
  }

  private storeCart() {
    if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
      localStorage.setItem('cart', JSON.stringify(this.cartItems()));
    }
  }

  get cartTotal() {
    return computed(() => this.cartItems().reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0));
  }
}