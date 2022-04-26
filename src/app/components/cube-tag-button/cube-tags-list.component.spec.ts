import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CubeTagsListComponent} from './cube-tags-list.component';

describe('CubeTagsListComponent', () => {
    let component: CubeTagsListComponent;
    let fixture: ComponentFixture<CubeTagsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CubeTagsListComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CubeTagsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
