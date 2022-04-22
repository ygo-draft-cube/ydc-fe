import { TestBed } from '@angular/core/testing';

import { CubeInformationResolver } from './cube-information.resolver';

describe('CubeInformationResolver', () => {
  let resolver: CubeInformationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CubeInformationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
