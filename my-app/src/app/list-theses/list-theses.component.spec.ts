import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThesesComponent } from './list-theses.component';

describe('ListThesesComponent', () => {
  let component: ListThesesComponent;
  let fixture: ComponentFixture<ListThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
