import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './core/site-header/site-header.component';
import { SearchComponent } from './catalog/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { CART_OPTIONS_TOKEN } from 'src/app/core/cart.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    SiteHeaderComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [
    // {
    //   provide: CartService,
    //   useFactory: () => {
    //     return new CartService();
    //   },
    // },
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistenceType: 'local', persistenceKey: 'cart' }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
