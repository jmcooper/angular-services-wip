import { Injectable } from '@angular/core';

import { Product } from '../catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  add(product: Product) {
    this.cart.push(product);
  }

  remove(product: Product) {
    this.cart = this.cart.filter((i) => i !== product);
  }
}
