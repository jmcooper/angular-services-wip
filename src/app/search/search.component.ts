import { Component } from '@angular/core';
import { Product } from '../catalog/product.model';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { productsArray } from '../catalog/products-data'

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  products: Product[] = [...productsArray];
  searchTerm: string = '';

  log(event: any) {
    console.log(event)
  }
  constructor(
    private cartSvc: CartService,
  ) { }

  ngOnInit() {
    this.products = [...productsArray];
  }

  addToCart(product: Product) {
    this.cartSvc.add(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
