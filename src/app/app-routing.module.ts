import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatisseriesComponent} from './patisseries/patisseries.component';
import {AjoutPatisserieComponent} from './ajout-patisserie/ajout-patisserie.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/pat', pathMatch: 'full'},
  {path: 'pat', component: PatisseriesComponent},
  {path: 'pat/add', component: AjoutPatisserieComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }












