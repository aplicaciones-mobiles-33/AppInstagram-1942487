import { TestBed } from '@angular/core/testing';

import { SubirFotoService } from './subir-foto.service';

describe('SubirFotoService', () => {
  let service: SubirFotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirFotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
