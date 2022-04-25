import {TestBed} from '@angular/core/testing';

import {CubeInformationResolver} from './cube-information.resolver';
import {HomePageResolver} from './home-page.resolver';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HomePageResolver', () => {
    let resolver: HomePageResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        resolver = TestBed.inject(HomePageResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
