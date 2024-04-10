import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { CartService } from 'src/app/core/cart.service';
import { engineers } from './engineers';

@Component({
  selector: 'bot-catalog',
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: []
})
export class SquadCatalogComponent {
  squad: Product[] = engineers;

  constructor(
    private cartService: CartService) { }

  addToCart(engineer: Product) {
    this.cartService.add(engineer);
  }
}
