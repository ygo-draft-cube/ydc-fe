import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomPage} from './room.page';

describe('RoomComponent', () => {
    let component: RoomPage;
    let fixture: ComponentFixture<RoomPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RoomPage]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
