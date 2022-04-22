import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomInProgressAlertComponent} from './room-in-progress-alert.component';

describe('RoomInProgressAlertComponent', () => {
    let component: RoomInProgressAlertComponent;
    let fixture: ComponentFixture<RoomInProgressAlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RoomInProgressAlertComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomInProgressAlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
