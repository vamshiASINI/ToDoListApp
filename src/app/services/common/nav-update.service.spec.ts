import { TestBed } from '@angular/core/testing';

import { NavUpdateService } from './nav-update.service';

describe('NavUpdateService', () => {
  let service: NavUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
