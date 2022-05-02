import { TestBed } from '@angular/core/testing';

import { ChamaFilmesService } from './chama-filmes.service';

describe('ChamaFilmesService', () => {
  let service: ChamaFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamaFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
