import { TestBed } from '@angular/core/testing';

import { WeekAndDayRangeService } from './week-and-day-range.service';

describe('WeekAndDayRangeService', () => {
  let service: WeekAndDayRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekAndDayRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
