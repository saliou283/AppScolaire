import { TestBed } from '@angular/core/testing';

import { DataProvidenService } from './data-provider.service';

describe('DataProvidenService', () => {
  let service: DataProvidenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProvidenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
