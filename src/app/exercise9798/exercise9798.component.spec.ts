import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9798Component } from './exercise9798.component';

describe('Exercise9798Component', () => {
  let component: Exercise9798Component;
  let fixture: ComponentFixture<Exercise9798Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise9798Component]
    });
    fixture = TestBed.createComponent(Exercise9798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
