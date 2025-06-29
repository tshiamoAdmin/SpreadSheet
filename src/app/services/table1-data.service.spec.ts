import { TestBed } from '@angular/core/testing';

import { Table1DataService } from './table1-data.service';

describe('Table1DataService', () => {
  let service: Table1DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Table1DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
