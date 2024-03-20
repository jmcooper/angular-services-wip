import { Injectable } from '@angular/core';
import { productsArray } from './products-data';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  refreshProducts() {
    this.products = productsArray;
  }
}