import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {UserService} from "../../services/user.service";
import {DraftRoomService} from "../../services/draft-room.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
    constructor(public userService: UserService, public draftRoomService: DraftRoomService) {
    }

    ngOnInit(): void {
    }

    signIn(): void {
        this.userService.signIn()
    }

    signOut(): void {
        this.userService.signOut()
    }

}
