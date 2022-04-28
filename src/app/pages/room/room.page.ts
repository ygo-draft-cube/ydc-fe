import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {DraftRoomService} from "../../services/draft-room.service";

@Component({
    templateUrl: './room.page.html',
    styleUrls: ['./room.page.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomPage implements OnInit {
    constructor(public draftRoomService: DraftRoomService) {
    }

    ngOnInit(): void {
    }
}
