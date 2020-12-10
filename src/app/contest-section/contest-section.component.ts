import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Questions } from './questions.model';
import { ContestService } from './../contest.service';

@Component({
  selector: 'app-contest-section',
  templateUrl: './contest-section.component.html',
  styleUrls: ['./contest-section.component.css']
})
export class ContestSectionComponent implements OnInit {

  questions: Questions[];
  questionId: string;


  constructor( public router: Router, public contestService: ContestService, public activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  onEnterContestHandler(){
    this.router.navigate(["questionSec"]);
  }


}
