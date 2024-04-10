import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductsService } from './products.service';
import { CartService } from 'src/app/core/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: []
})
export class CatalogComponent {
  products: Observable<Product[]> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
