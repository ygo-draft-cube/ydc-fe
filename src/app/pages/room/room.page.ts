import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
    templateUrl: './room.page.html',
    styleUrls: ['./room.page.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomPage implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
