import { TestBed } from '@angular/core/testing';
import { ManService } from './clothman.service';

describe('ManService', () => {
  let service: ManService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
