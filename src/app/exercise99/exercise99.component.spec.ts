import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise99Component } from './exercise99.component';

describe('Exercise99Component', () => {
  let component: Exercise99Component;
  let fixture: ComponentFixture<Exercise99Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise99Component]
    });
    fixture = TestBed.createComponent(Exercise99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
