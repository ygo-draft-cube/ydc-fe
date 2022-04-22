import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CubeSearchBarComponent} from './cube-search-bar.component';

describe('CubeSearchComponent', () => {
    let component: CubeSearchBarComponent;
    let fixture: ComponentFixture<CubeSearchBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CubeSearchBarComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CubeSearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
