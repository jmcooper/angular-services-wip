import { Component } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data'
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filter: string = '';
  cart: Product[] = [];

  constructor(
    private cartSvc: CartService,
  ) { }

  ngOnInit() {
    this.products = [...productsArray];
  }

  addToCart(product: Product) {
    this.cartSvc.add(product);
  }
}
