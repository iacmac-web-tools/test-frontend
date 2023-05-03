import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThesisComponent } from './update-thesis.component';

describe('UpdateThesisComponent', () => {
  let component: UpdateThesisComponent;
  let fixture: ComponentFixture<UpdateThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
