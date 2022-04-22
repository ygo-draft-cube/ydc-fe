import { TestBed } from '@angular/core/testing';

import { CubeSearchResolver } from './cube-search.resolver';

describe('CubeSearchResolver', () => {
  let resolver: CubeSearchResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CubeSearchResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
