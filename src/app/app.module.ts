import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/** Modules */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** Components*/
import { InputControlComponent } from './input-control/input-control.component';

@NgModule({
  declarations: [
    AppComponent,
    InputControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
