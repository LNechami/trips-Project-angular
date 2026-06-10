import { TestBed } from '@angular/core/testing';

import { AllTrips } from './all-trips';

describe('AllTrips', () => {
  let service: AllTrips;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTrips);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
