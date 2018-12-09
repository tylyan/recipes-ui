import { TestBed, inject } from '@angular/core/testing';

import { BulkAddService } from './bulk-add.service';

describe('BulkAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BulkAddService]
    });
  });

  it('should be created', inject([BulkAddService], (service: BulkAddService) => {
    expect(service).toBeTruthy();
  }));
});
