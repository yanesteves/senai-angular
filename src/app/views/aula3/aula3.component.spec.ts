import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula3Component } from './aula3.component';

describe('Aula3Component', () => {
  let component: Aula3Component;
  let fixture: ComponentFixture<Aula3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
