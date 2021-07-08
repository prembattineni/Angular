import { TestBed } from '@angular/core/testing';

import { EmployeewebService } from './employeeweb.service';

describe('EmployeewebService', () => {
  let service: EmployeewebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeewebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
