import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Patisserie} from '../model/patisserie';
@Injectable({
  providedIn: 'root'
})
export class PatisserieServiceService {
  url = 'http://127.0.0.1:8000/pat';
  patisserie: Patisserie;
  constructor(private http: HttpClient) { }
  postPatisserie(patisserie: Patisserie){
    return this.http.post(this.url + '/add'  , patisserie).subscribe((res: any) => {
      console.log(patisserie);
    });
  }
  getPatisseries(){
    return this.http.get<Patisserie[]>(this.url);
  }
}
