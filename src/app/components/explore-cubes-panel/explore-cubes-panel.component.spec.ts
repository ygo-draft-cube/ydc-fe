import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExploreCubesPanelComponent} from './explore-cubes-panel.component';

describe('ExploreCubesPanelComponent', () => {
    let component: ExploreCubesPanelComponent;
    let fixture: ComponentFixture<ExploreCubesPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExploreCubesPanelComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreCubesPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
