import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([]);

  constructor(private http: HttpClient) { }

  async fetchProducts() {
    const resp = await fetch('/api/products');
    this.products.set(await resp.json());
    // return this.http.get<Product[]>('/api/products')
    //   .subscribe((products) => this.products.set(products));
  }
}
