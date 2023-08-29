import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AllThesisComponent} from './all-thesis.component';

describe('AllThesisComponent', () => {
  let component: AllThesisComponent;
  let fixture: ComponentFixture<AllThesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllThesisComponent]
    });
    fixture = TestBed.createComponent(AllThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
