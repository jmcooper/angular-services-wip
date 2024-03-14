import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(private http: HttpClient) {
  }

  add(product: Product) {
    this.cart.push(product);
  }

  remove(product: Product) {
    const idx = this.cart.findIndex(p => p.id === product.id);
    this.cart.splice(idx, 1);
    // this.cart = this.cart.filter((i) => i !== product);
  }

  get cartTotal() {
    const accumulator = (acc: number, next: Product) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return acc + next.price * discount;
    };
    return this.cart.reduce(accumulator, 0);
  }
}
