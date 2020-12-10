import { ContestService } from './../contest.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( public router: Router, public contestService: ContestService ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (form.invalid){
      return;
    }
    this.contestService.saveAuthData(form.form.value.email);
  }
}
