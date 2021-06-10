import { TestBed } from '@angular/core/testing';

import { NavItemUpdateService } from './nav-item-update.service';

describe('NavItemUpdateService', () => {
  let service: NavItemUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavItemUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
