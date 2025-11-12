import { TestBed } from '@angular/core/testing';

import { LocalCounterServiceService } from './local-counter-service.service';

describe('LocalCounterServiceService', () => {
  let service: LocalCounterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCounterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
