import { TestBed } from '@angular/core/testing';

import { UserpickRequestMapperService } from './userpick-request-mapper.service';

describe('UserpickRequestMapperService', () => {
  let service: UserpickRequestMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpickRequestMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
