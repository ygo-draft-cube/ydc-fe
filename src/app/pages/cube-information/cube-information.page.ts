import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CubeInformationResolverData} from "../../resolvers/cube-information.resolver-data-interface";
import {UserService} from "../../services/user.service";


@Component({
    templateUrl: './cube-information.page.html',
    styleUrls: ['./cube-information.page.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeInformationPage implements OnInit {
    CubeInformationResolverData!: CubeInformationResolverData

    constructor(
        public activatedRoute: ActivatedRoute, public userService: UserService
    ) {
    }

    ngOnInit(): void {
    }
}
