import { Component } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products = this.productSvc.products;
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productSvc.fetchProducts();
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  addToCart(product: Product) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products()
      : this.products().filter(
        (product: any) => product.category === this.filter
      );
  }
}
