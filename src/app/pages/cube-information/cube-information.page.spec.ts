import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CubeInformationPage} from './cube-information.page';

describe('CubeInformationComponent', () => {
    let component: CubeInformationPage;
    let fixture: ComponentFixture<CubeInformationPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CubeInformationPage]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CubeInformationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
