import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestSectionComponent } from './contest-section.component';

describe('ContestSectionComponent', () => {
  let component: ContestSectionComponent;
  let fixture: ComponentFixture<ContestSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
