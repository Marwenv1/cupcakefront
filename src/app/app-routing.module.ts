import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatisseriesComponent} from './patisseries/patisseries.component';
import {AjoutPatisserieComponent} from './ajout-patisserie/ajout-patisserie.component';
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import {Produit} from './model/produit';
import {ProduitsComponent} from './produits/produits.component';
import {UpdatePatisserieComponent} from './update-patisserie/update-patisserie.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/pat', pathMatch: 'full'},
  {path: 'pat', component: PatisseriesComponent},
  {path: 'pat/add', component: AjoutPatisserieComponent},
  {path: 'pat/update/:id', component: UpdatePatisserieComponent},
  {path: 'pat/:id/produit/add', component: AjoutProduitComponent},
  {path: 'pat/produits/:id', component: ProduitsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }












