import { TestBed } from '@angular/core/testing';

import { DummyHttpService } from './dummy-http-service';

describe('DummyHttpService', () => {
  let service: DummyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
