import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThesisComponent } from './create-thesis.component';

describe('CreateComponent', () => {
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

  it('should create-thesis', () => {
    expect(component).toBeTruthy();
  });
});
