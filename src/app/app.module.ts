import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { BookDetailsComponent } from './product/book-details/book-details.component';
import { CartViewComponent } from './product/cart-view/cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ProductListComponent,
    BookDetailsComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
