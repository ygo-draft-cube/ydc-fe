import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CubeSearchListingCardComponent} from './cube-search-listing-card.component';

describe('CubeSearchListingCardComponent', () => {
    let component: CubeSearchListingCardComponent;
    let fixture: ComponentFixture<CubeSearchListingCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CubeSearchListingCardComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CubeSearchListingCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
