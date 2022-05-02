import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Component } from './ex4.component';

describe('Ex4Component', () => {
  let component: Ex4Component;
  let fixture: ComponentFixture<Ex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
