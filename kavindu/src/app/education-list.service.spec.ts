import { TestBed } from '@angular/core/testing';

import { EducationListService } from './education-list.service';

describe('EducationListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationListService = TestBed.get(EducationListService);
    expect(service).toBeTruthy();
  });
});
