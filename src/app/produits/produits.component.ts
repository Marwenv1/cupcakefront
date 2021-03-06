import { Component, OnInit } from '@angular/core';
import {Patisserie} from '../model/patisserie';
import {Produit} from '../model/produit';
import {PatisserieServiceService} from '../services/patisserie-service.service';
import {ProduitService} from '../services/produit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  listProd: Produit[];
  list: Produit[];
  idpatisserie: number;
  nom: string;
  recherche: string;
  // tslint:disable-next-line:max-line-length
  constructor(private service: ActivatedRoute, private serviceProduit: ProduitService, private servicePatisserie: PatisserieServiceService) { }

  ngOnInit(): void {
    this.idpatisserie = this.service.snapshot.params.id;
    this.servicePatisserie.getPatisserie(this.service.snapshot.params.id).subscribe(
      (data: Patisserie) => this.nom = data.nom
    );
    this.serviceProduit.getProduits(this.service.snapshot.params.id).subscribe(
      (data: Produit[]) => this.listProd = data
    );
    this.list = this.listProd;
    this.recherche = '';
  }
  delete(id: number){
    this.serviceProduit.deleteProduit(id).subscribe(
      () => this.listProd = this.listProd.filter(pat => pat.refPdt !== id)
    );
  }


}
