import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { CART_OPTIONS_TOKEN, CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent,
    SearchComponent,
    SignInComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
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
