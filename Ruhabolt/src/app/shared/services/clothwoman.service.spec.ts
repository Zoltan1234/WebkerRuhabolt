import { TestBed } from '@angular/core/testing';

import { WomanService } from './clothwoman.service';

describe('WomanService', () => {
  let service: WomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
