import { NgModule } from '@angular/core';
import { CART_OPTIONS_TOKEN, CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserRoutingModule],
  providers: [
    {
      provide: CartService,
      useClass: CartService,
    },
    // {
    //   provide: CartService,
    //   useFactory: () => {
    //     return new CartService();
    //   },
    // },
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistenceType: 'local', persistenceKey: 'usercart' }
    }
  ],
})
export class UserModule { }
