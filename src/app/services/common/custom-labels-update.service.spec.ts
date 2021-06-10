import { TestBed } from '@angular/core/testing';

import { CustomLabelsUpdateService } from './custom-labels-update.service';

describe('CustomLabelsUpdateService', () => {
  let service: CustomLabelsUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLabelsUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
