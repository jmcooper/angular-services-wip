import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CatalogComponent } from './catalog.component';
import { SearchComponent } from './search/search.component';
import { CART_OPTIONS_TOKEN } from '@core/cart.service';

@NgModule({
  imports: [SharedModule],
  declarations: [CatalogComponent, SearchComponent],
  providers: [
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistenceType: 'local', persistenceKey: 'cart' }
    }
  ],
  exports: []
})
export class CatalogModule { }
