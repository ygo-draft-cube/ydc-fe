import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CubeSearchPage} from './cube-search.page';
import {RouterTestingModule} from "@angular/router/testing";

describe('CubeSearchPage', () => {
    let component: CubeSearchPage;
    let fixture: ComponentFixture<CubeSearchPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [CubeSearchPage]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CubeSearchPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
