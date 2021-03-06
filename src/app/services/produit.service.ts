import { Injectable } from '@angular/core';
import {Patisserie} from '../model/patisserie';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../model/produit';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url = 'http://127.0.0.1:8000/pat/prod';
  produit: Produit;
  constructor(private http: HttpClient, private router: Router) { }
  postProduit(produit: Produit){
    return this.http.post('http://127.0.0.1:8000/produit/add'  , produit).subscribe((res: any) => {
      this.router.navigate(['pat/produits/' + produit.idpatisserie]);
      console.log(res);
    });
  }
  getProduits(idPatisserie){
    return this.http.get<Produit[]>(this.url + '/' + idPatisserie);
  }
  getProduit(id): Observable<Produit>{
    return this.http.get<Produit>('http://127.0.0.1:8000/prod/' + id);
  }

  updateProduit(produit: Produit){
    return this.http.post(this.url + '/update/' + produit.refPdt  , produit).subscribe((res: any) => {
      this.router.navigate(['pat/produits/' + produit.idpatisserie]);
      console.log(res);
    });
  }
  deleteProduit(id){
    return this.http.get(this.url + '/del/' + id);
  }
}
