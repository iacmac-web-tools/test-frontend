import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThesesComponent } from './add-theses.component';

describe('AddThesesComponent', () => {
  let component: AddThesesComponent;
  let fixture: ComponentFixture<AddThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
