import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeaturedCubesPanelComponent} from './featured-cubes-panel.component';

describe('FeaturedCubesPanelComponent', () => {
    let component: FeaturedCubesPanelComponent;
    let fixture: ComponentFixture<FeaturedCubesPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FeaturedCubesPanelComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeaturedCubesPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
