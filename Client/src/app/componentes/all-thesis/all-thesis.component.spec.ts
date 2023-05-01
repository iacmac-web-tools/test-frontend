import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllThesisComponent } from './all-thesis.component';

describe('AllThesisComponent', () => {
  let component: AllThesisComponent;
  let fixture: ComponentFixture<AllThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
