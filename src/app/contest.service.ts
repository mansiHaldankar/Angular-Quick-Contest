import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Questions } from './contest-section/questions.model';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

   allQuestions = [
    {
      questionId: "1",
      questionText: "Ajanta-Ellora caves are situated near?",
      options: [
        { optionValue: "A", optionText: "Ajmer" },
        { optionValue: "B", optionText: "Jaipur" },
        { optionValue: "C", optionText: "Patna" },
        { optionValue: "D", optionText: "Aurangabad" }
      ],
      expectedOpt: "D",
    },{
      questionId: "2",
      questionText: "Sun Temple is situated at?",
      options: [
        { optionValue: "A", optionText: "Konark" },
        { optionValue: "B", optionText: "Bangalore" },
        { optionValue: "C", optionText: "Haridwar" },
        { optionValue: "D", optionText: "Kerala" }
      ],
      expectedOpt: "A",
    },{
      questionId: "3",
      questionText: "The 'Char Minar' is in?",
      options: [
        { optionValue: "A", optionText: "Ahmedabad" },
        { optionValue: "B", optionText: "Hyderabad" },
        { optionValue: "C", optionText: "Delhi" },
        { optionValue: "D", optionText: "Sikri" }
      ],
      expectedOpt: "B",
    },{
      questionId: "4",
      questionText: "The largest continent in the world is?",
      options: [
        { optionValue: "A", optionText: "Africa" },
        { optionValue: "B", optionText: "Asia" },
        { optionValue: "C", optionText: "Australia" },
        { optionValue: "D", optionText: "Antarctica" }
      ],
      expectedOpt: "B",
    },{
      questionId: "5",
      questionText: "Kathak is a classical dance of?",
      options: [
        { optionValue: "A", optionText: "North India" },
        { optionValue: "B", optionText: "Tamilnadu" },
        { optionValue: "C", optionText: "Manipur" },
        { optionValue: "D", optionText: "Kerala  " }
      ],
      expectedOpt: "A",
    }
  ];
  updatedQuestions: Questions[];

  // updatedQuestions = new Subject <{allQuestions: Questions[]}> ();

  constructor( public router: Router ) { }

  saveAuthData(emailId: string){
    localStorage.setItem('emailId', emailId);
    localStorage.setItem('contestQuestions', JSON.stringify(this.allQuestions));
    this.router.navigate(['/contestSection']);
  }

  getAuthData(){
    return localStorage.getItem('emailId');
  }

  removeAuthData(){
    localStorage.removeItem('emailId');
    localStorage.removeItem('contestQuestions');
  }

  loadQuestion() {
    this.updatedQuestions = JSON.parse(localStorage.getItem('contestQuestions'));
    return this.updatedQuestions;
  }


}
