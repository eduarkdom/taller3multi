import { TestBed } from '@angular/core/testing';

import { ApiretailService } from './apiretail.service';

describe('ApiretailService', () => {
  let service: ApiretailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiretailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
