import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {CubeSearchResolver} from './cube-search.resolver';

describe('CubeSearchResolver', () => {
    let resolver: CubeSearchResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        resolver = TestBed.inject(CubeSearchResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
