import { Component, OnInit, Signal, signal } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { CartService } from '../cart/cart.service';
import { Product } from '../catalog/product.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  user: Signal<IUser | null> = signal(null);
  showSignOutMenu: boolean = false;
  cart: Product[] = [];

  constructor(private userService: UserService, private cartService: CartService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.cart = this.cartService.cart;
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
