import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise96Component } from './exercise96.component';

describe('Exercise96Component', () => {
  let component: Exercise96Component;
  let fixture: ComponentFixture<Exercise96Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise96Component]
    });
    fixture = TestBed.createComponent(Exercise96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
