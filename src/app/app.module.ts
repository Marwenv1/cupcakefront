import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AjoutPatisserieComponent } from './ajout-patisserie/ajout-patisserie.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PatisseriesComponent } from './patisseries/patisseries.component';
import { AppRoutingModule } from './app-routing.module';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { UpdatePatisserieComponent } from './update-patisserie/update-patisserie.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { AjoutCompetitionComponent } from './ajout-competition/ajout-competition.component';
import { UpdateCompetitionComponent } from './update-competition/update-competition.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutPatisserieComponent,
    PatisseriesComponent,
    AjoutProduitComponent,
    ProduitsComponent,
    UpdatePatisserieComponent,
    UpdateProduitComponent,
    CompetitionsComponent,
    AjoutCompetitionComponent,
    UpdateCompetitionComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
