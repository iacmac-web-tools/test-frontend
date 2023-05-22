import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesesComponent } from './theses.component';

describe('ThesesComponent', () => {
  let component: ThesesComponent;
  let fixture: ComponentFixture<ThesesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThesesComponent]
    });
    fixture = TestBed.createComponent(ThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
