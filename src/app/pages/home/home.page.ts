import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HomePageResolverData} from "../../resolvers/home-page.resolver-data-interface";
import {DraftRoomService} from "../../services/draft-room.service";

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
    HomePageResolverData!: HomePageResolverData;

    constructor(public activatedRoute: ActivatedRoute, public draftRoomService: DraftRoomService) {
    }

    ngOnInit(): void {
    }
}
