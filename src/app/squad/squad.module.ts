import { NgModule } from '@angular/core';
import { CART_OPTIONS_TOKEN, CartService } from '@core/cart.service';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [
    {
      provide: CartService,
      useClass: CartService,
    },
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistenceType: 'local', persistenceKey: 'squadcart' }
    }
  ],
})
export class SquadModule { }
