import { TestBed } from '@angular/core/testing';

import { BatchSectionService } from './batch-section.service';

describe('BatchSectionService', () => {
  let service: BatchSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
