import { TestBed } from '@angular/core/testing';

import { FarmersApiService } from './farmers-api.service';

describe('FarmersApiService', () => {
  let service: FarmersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
