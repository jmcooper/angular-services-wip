import { Injectable } from '@angular/core';
import { productsArray } from './products-data';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  getProducts(): Product[] {
    return productsArray;
  }
}