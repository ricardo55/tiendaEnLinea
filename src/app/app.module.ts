import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

@NgModule({
  declarations: [
     AppComponent,
     EcommerceComponent
    ],

  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




