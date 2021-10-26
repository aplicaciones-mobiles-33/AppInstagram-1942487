import { TestBed } from '@angular/core/testing';

import { FirebaseDbService } from './firebase-db.service';

describe('FirebaseDbService', () => {
  let service: FirebaseDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
