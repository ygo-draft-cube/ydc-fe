import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ProfilePage implements OnInit {
    constructor(public userService: UserService) {
    }

    ngOnInit(): void {
    }
}
