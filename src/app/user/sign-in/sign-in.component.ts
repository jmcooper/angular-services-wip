import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;

  constructor(private cartService: CartService) { }

  signIn() {
    this.signInError = false;
    this.cartService.add({
      id: 1,
      description:
        "Userbot",
      name: "UserBot",
      imageName: "head-big-eye.png",
      category: "Heads",
      price: 1220.5,
      discount: 0.2,
    },)
  }
}
