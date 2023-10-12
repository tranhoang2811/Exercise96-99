import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise96Component } from './exercise96/exercise96.component';
import { Exercise9798Component } from './exercise9798/exercise9798.component';
import { Exercise99Component } from './exercise99/exercise99.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise96Component,
    Exercise9798Component,
    Exercise99Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
