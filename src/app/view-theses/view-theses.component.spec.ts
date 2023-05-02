import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThesesComponent } from './view-theses.component';

describe('ThesesComponent', () => {
  let component: ViewThesesComponent;
  let fixture: ComponentFixture<ViewThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewThesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-thesis', () => {
    expect(component).toBeTruthy();
  });
});
