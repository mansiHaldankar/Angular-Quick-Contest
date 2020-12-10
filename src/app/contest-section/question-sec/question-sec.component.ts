import { Component, OnInit, ViewChild } from '@angular/core';

import { Questions } from '../questions.model';
import { ContestService } from './../../contest.service';
import { CountdownComponent } from "ngx-countdown";
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../error/error.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question-sec',
  templateUrl: './question-sec.component.html',
  styleUrls: ['./question-sec.component.css']
})
export class QuestionSecComponent implements OnInit {

  question: Questions;
  selectedOption;
  index: number = 0;
  totalPoints: number = 0;
  updatedQuestionId: number;
  currentQuestionId: number;
  allQuestions: any;
  selectedOpt = {};
  @ViewChild("countDown", { static: false })
  private countdown: CountdownComponent;
  config = {
    leftTime: 5,
    format: "mm:ss",
    notify: [5]
  };

  constructor( public contestService: ContestService, public dialog: MatDialog, public router: Router ) { }

  ngOnInit(): void {
    this.allQuestions = this.contestService.loadQuestion();
    this.question = this.getQuestion(this.index);
  }

  getQuestion(qIndex: number){
    this.index = qIndex + 1;
    return this.allQuestions[qIndex];
  }
  onOptionSelectionHandler(evt: any){
    var key = this.question.questionId;
    if(evt.value && evt.value == this.question.expectedOpt){
      this.selectedOpt[key] = true;
    }
    else{
      this.selectedOpt[key]= false;
    }
  }

  openDialog() {
    var name = this.contestService.getAuthData()
    const dialogRef = this.dialog.open(ErrorComponent, {data : {name : name, totalPoints: this.totalPoints}});

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }

  handleEvent(evt) {
     if (evt.action == "done") {
       if(this.index < this.allQuestions.length){
        this.selectedOption = null;
          this.question = this.getQuestion(this.index);

          setTimeout(() => {
            this.countdown.restart();
          });
       }
       else{
        Object.values(this.selectedOpt).forEach(val => {
          if(val == true){
            this.totalPoints += 100;
            }
          });
          this.openDialog();
       }
    }
  }
}
