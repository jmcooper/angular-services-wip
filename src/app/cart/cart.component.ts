import { Component } from '@angular/core';
import { Product } from '../catalog/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Product[] = this.cartService.cart;
  get cartTotal() {
    return this.cartService.cartTotal;
  }

  constructor(private cartService: CartService) { }

  removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
