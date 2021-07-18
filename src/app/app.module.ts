import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AjoutPatisserieComponent } from './ajout-patisserie/ajout-patisserie.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutPatisserieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
