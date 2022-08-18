import { TestBed } from '@angular/core/testing';

import { MicrosftGuard } from './microsft.guard';

describe('MicrosftGuard', () => {
  let guard: MicrosftGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MicrosftGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
