import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostThesisComponent } from './post-thesis.component';

describe('PostThesisComponent', () => {
  let component: PostThesisComponent;
  let fixture: ComponentFixture<PostThesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostThesisComponent]
    });
    fixture = TestBed.createComponent(PostThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
