import { Component } from '@angular/core';
import { Product } from '../catalog/product.model';
import { ProductsService } from '../catalog/products.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  products: Product[] = [];
  searchTerm: string = '';
  cart: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.add(product);
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
