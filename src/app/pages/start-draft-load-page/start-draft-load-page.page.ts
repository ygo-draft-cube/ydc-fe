import {Component, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {delay, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DraftRoomService} from "../../services/draft-room.service";
import {CubeService} from "../../services/cube.service";

@Component({
    templateUrl: './start-draft-load-page.page.html',
    styleUrls: ['./start-draft-load-page.page.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartDraftLoadPagePage implements OnDestroy {
    mocked$: Subscription

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private draftRoomService: DraftRoomService,
        private cubeService: CubeService
    ) {
        const id = this.activatedRoute.snapshot.params['id'];
        this.mocked$ = this.cubeService.getCubeById(id).pipe(
            delay(5000)
        ).subscribe((cube) => {
            const roomId = this.draftRoomService.setRoomInfo(cube)
            this.router.navigate(['/draft-room', roomId])
        })
    }

    ngOnDestroy(): void {
        this.mocked$.unsubscribe()
    }
}
