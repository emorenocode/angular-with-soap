import { TestBed } from '@angular/core/testing';

import { StockquoteService } from './stockquote.service';

describe('StockquoteService', () => {
  let service: StockquoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockquoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
