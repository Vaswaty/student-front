import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentComponent } from './showstudent.component';

describe('ShowstudentComponent', () => {
  let component: ShowStudentComponent;
  let fixture: ComponentFixture<ShowStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowStudentComponent]
    });
    fixture = TestBed.createComponent(ShowStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
