import {TestBed} from '@angular/core/testing';

import {CubeInformationResolver} from './cube-information.resolver';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CubeInformationResolver', () => {
    let resolver: CubeInformationResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        resolver = TestBed.inject(CubeInformationResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
