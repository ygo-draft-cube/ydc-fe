import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExploreCubeListComponent} from './explore-cube-list.component';

describe('ExploreCubeListComponent', () => {
    let component: ExploreCubeListComponent;
    let fixture: ComponentFixture<ExploreCubeListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExploreCubeListComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreCubeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
