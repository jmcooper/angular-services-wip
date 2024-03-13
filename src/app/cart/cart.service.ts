import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

import { Product } from '../catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<Product[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  add(product: Product) {
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + product.name + ' to cart!');
    });
  }

  remove(product: Product) {
    let newCart = this.cart.getValue().filter((i) => i !== product);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + product.name + ' from cart!');
    });
  }

  get cartTotal() {
    const accumulator = (acc: number, next: Product) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return acc + next.price * discount;
    };
    return this.cart.pipe(map((products: Product[]) => products.reduce(accumulator, 0)));
  }
}
