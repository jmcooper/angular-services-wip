import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from '@core/site-header/site-header.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from '@catalog/catalog.module';
import { CartService } from '@catalog/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, CatalogModule],
  providers: [{
    provide: CartService,
    useClass: CartService
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
