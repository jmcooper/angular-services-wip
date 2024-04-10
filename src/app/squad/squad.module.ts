import { NgModule } from '@angular/core';
import { CART_OPTIONS_TOKEN } from 'src/app/core/cart.service';
import { SharedModule } from '../shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistenceType: 'local', persistenceKey: 'usercart' }
    }
  ],
})
export class SquadModule { }
