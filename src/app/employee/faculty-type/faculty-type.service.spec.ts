import { TestBed } from '@angular/core/testing';

import { FacultyTypeService } from './faculty-type.service';

describe('FacultyTypeService', () => {
  let service: FacultyTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
