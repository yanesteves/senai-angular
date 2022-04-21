import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeComponent } from './filme.component';

describe('FilmeComponent', () => {
  let component: FilmeComponent;
  let fixture: ComponentFixture<FilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
