import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpThesesComponent } from './up-theses.component';

describe('UpThesesComponent', () => {
  let component: UpThesesComponent;
  let fixture: ComponentFixture<UpThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpThesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
