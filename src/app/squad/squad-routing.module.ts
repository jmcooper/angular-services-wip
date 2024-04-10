import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { CartComponent } from '@shared/cart/cart.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: 'bot-squad', component: SquadCatalogComponent },
  { path: 'squad-cart', component: CartComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class SquadRoutingModule { }
