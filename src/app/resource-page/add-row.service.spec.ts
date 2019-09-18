import { TestBed } from '@angular/core/testing';

import { AddRowService } from './add-row.service';

describe('AddRowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRowService = TestBed.get(AddRowService);
    expect(service).toBeTruthy();
  });
});
