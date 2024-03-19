import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';
import { ProductsService } from './products.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  cart: Product[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.products = this.productsService.getProducts()
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
