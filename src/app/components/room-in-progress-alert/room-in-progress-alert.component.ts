import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-room-in-progress-alert',
    templateUrl: './room-in-progress-alert.component.html',
    styleUrls: ['./room-in-progress-alert.component.scss']
})
export class RoomInProgressAlertComponent implements OnInit {
    @Input() id: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }
}
