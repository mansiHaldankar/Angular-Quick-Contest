import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestSectionComponent } from './contest-section/contest-section.component';
import { QuestionSecComponent } from './contest-section/question-sec/question-sec.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'contestSection', component: ContestSectionComponent },
  { path: 'questionSec', component: QuestionSecComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
