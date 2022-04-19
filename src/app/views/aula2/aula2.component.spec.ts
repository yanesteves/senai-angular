import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula2Component } from './aula2.component';

describe('Aula2Component', () => {
  let component: Aula2Component;
  let fixture: ComponentFixture<Aula2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
