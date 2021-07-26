import {Component, Input, OnInit} from '@angular/core';
import {PublicationService} from '../services/publication.service';
import {Publication} from '../model/publication';
import {Competition} from '../model/competition';

@Component({
  selector: 'app-ajout-publication',
  templateUrl: './ajout-publication.component.html',
  styleUrls: ['./ajout-publication.component.css']
})
export class AjoutPublicationComponent implements OnInit {
  @Input() idCompetition: number;
  publication: Publication;
  constructor(private servicePublication: PublicationService) { }

  ngOnInit(): void {
    this.publication = new Publication();

  }
  save(){
    this.publication.idcompetition = this.idCompetition;
    this.servicePublication.postPublication(this.publication);
  }

}
