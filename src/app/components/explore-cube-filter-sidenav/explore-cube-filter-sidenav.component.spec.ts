import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExploreCubeFilterSidenavComponent} from './explore-cube-filter-sidenav.component';

describe('ExploreCubeFilterSidenavComponent', () => {
    let component: ExploreCubeFilterSidenavComponent;
    let fixture: ComponentFixture<ExploreCubeFilterSidenavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExploreCubeFilterSidenavComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreCubeFilterSidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
