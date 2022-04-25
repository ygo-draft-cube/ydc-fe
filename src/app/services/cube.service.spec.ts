import {TestBed} from '@angular/core/testing';

import {CubeService} from './cube.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from '@angular/common/http';

describe('CubeService', () => {
    let service: CubeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientModule]
        });
        service = TestBed.inject(CubeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
