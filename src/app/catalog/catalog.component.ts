import { Component } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { productsArray } from './products-data';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] = productsArray;

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
  ) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartSvc.add(product);
  }
}
