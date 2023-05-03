import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThesisComponent } from './create-thesis.component';

describe('CreateThesisComponent', () => {
  let component: CreateThesisComponent;
  let fixture: ComponentFixture<CreateThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
