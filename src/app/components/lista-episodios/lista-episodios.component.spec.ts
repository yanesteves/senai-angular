import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEpisodiosComponent } from './lista-episodios.component';

describe('ListaEpisodiosComponent', () => {
  let component: ListaEpisodiosComponent;
  let fixture: ComponentFixture<ListaEpisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEpisodiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
