import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {
    this.products = this.productsService.getProducts();
    setTimeout(() => this.productsService.refreshProducts(), 3000);
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
