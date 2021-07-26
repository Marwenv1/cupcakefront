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
import { AjoutPublicationComponent } from './ajout-publication/ajout-publication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationComponent } from './publication/publication.component';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { RepondreReclamationsAdminComponent } from './repondre-reclamations-admin/repondre-reclamations-admin.component';
import { DetailReclamationComponent } from './detail-reclamation/detail-reclamation.component';
import { StatsComponent } from './stats/stats.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { AvisAdminComponent } from './avis-admin/avis-admin.component';
import { AjoutAvisComponent } from './ajout-avis/ajout-avis.component';

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
    UpdateCompetitionComponent,
    AjoutPublicationComponent,
    NotFoundComponent,
    PublicationsComponent,
    PublicationComponent,
    AjoutReclamationComponent,
    ReclamationsComponent,
    ReclamationsAdminComponent,
    RepondreReclamationsAdminComponent,
    DetailReclamationComponent,
    StatsComponent,
    AvisAdminComponent,
    AjoutAvisComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        GoogleChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
