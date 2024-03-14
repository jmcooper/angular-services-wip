import { Component } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products = this.productSvc.products;

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
  ) { }

  ngOnInit() {
    this.productSvc.fetchProducts();
  }

  addToCart(product: Product) {
    this.cartSvc.add(product);
  }
}
