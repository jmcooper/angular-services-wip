import { Component } from '@angular/core';
import { Product } from '../catalog/product.model';
import { productsArray } from '../catalog/products-data'
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  products: Product[] = [...productsArray];
  searchTerm: string = '';
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = [...productsArray];
  }

  addToCart(product: Product) {
    this.cartService.add(product);
    // this.cart.push(product);
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
