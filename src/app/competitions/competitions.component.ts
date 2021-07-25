import { Component, OnInit } from '@angular/core';
import {Competition} from '../model/competition';
import {CompetitionService} from '../services/competition.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  listComp: Competition[];
  constructor(private serviceCompetition: CompetitionService) { }

  ngOnInit(): void {
    this.serviceCompetition.getCompetitions().subscribe(
      (data: Competition[]) => this.listComp = data
    );
  }
  delete(id: number){
  this.serviceCompetition.deleteCompetition(id).subscribe(
    () => this.listComp = this.listComp.filter(comp => comp.idCompetition !== id)
  );
  }
  partager(){}
}
