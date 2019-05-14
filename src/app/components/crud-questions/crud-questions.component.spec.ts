import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudQuestionsComponent } from './crud-questions.component';

describe('CrudQuestionsComponent', () => {
  let component: CrudQuestionsComponent;
  let fixture: ComponentFixture<CrudQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudQuestionsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
