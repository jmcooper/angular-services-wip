import { Product } from '@shared/product.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Subject<Product[]> = new Subject();

  getProducts(): Observable<Product[]> {
    fetch('/api/products')
    return this.products;
  }
}