import { TestBed } from '@angular/core/testing';

import { Calculator1serviceService } from './calculator1service.service';

describe('Calculator1serviceService', () => {
  let service: Calculator1serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculator1serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
