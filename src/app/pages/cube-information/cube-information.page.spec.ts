import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CubeInformationPage} from './cube-information.page';
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialModule} from 'src/app/core/material.module';

describe('CubeInformationPage', () => {
    let component: CubeInformationPage;
    let fixture: ComponentFixture<CubeInformationPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, MaterialModule],
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
