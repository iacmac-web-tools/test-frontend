import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThesisComponent } from './edit-thesis.component';

describe('CreateComponent', () => {
  let component: EditThesisComponent;
  let fixture: ComponentFixture<EditThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit-thesis', () => {
    expect(component).toBeTruthy();
  });
});
