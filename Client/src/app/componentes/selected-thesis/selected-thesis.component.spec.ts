import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedThesisComponent } from './selected-thesis.component';

describe('SelectedThesisComponent', () => {
  let component: SelectedThesisComponent;
  let fixture: ComponentFixture<SelectedThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
