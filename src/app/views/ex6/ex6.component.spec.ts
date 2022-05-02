import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6Component } from './ex6.component';

describe('Ex6Component', () => {
  let component: Ex6Component;
  let fixture: ComponentFixture<Ex6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
