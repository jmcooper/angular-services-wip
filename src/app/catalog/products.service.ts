import { Injectable } from '@angular/core';
import { productsArray } from './products-data';
import { Product } from './product.model';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Subject<Product[]> = new Subject();

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  refreshProducts() {
    console.log(this.products)
    this.products.next(productsArray);
  }
}