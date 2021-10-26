import { TestBed } from '@angular/core/testing';

import { AproveOrRejectService } from './aprove-or-reject.service';

describe('AproveOrRejectService', () => {
  let service: AproveOrRejectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AproveOrRejectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
