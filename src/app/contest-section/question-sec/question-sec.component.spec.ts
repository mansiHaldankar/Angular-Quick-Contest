import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSecComponent } from './question-sec.component';

describe('QuestionSecComponent', () => {
  let component: QuestionSecComponent;
  let fixture: ComponentFixture<QuestionSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
