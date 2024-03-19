import { Injectable } from '@angular/core';
import { productsArray } from './products-data';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  getProducts() {
    return productsArray;
  }
}