import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cube} from "../models/cube.model";
import {nanoid} from "nanoid";


@Injectable({
    providedIn: 'root'
})
export class DraftRoomService {
    room$: BehaviorSubject<{ cube: Cube; id: string } | null>
    loadingRoomInfo$: BehaviorSubject<boolean>

    constructor() {
        this.room$ = new BehaviorSubject<{ cube: Cube, id: string } | null>(null)
        this.loadingRoomInfo$ = new BehaviorSubject<boolean>(false)
    }

    public setRoomInfo(cube: Cube): string {
        const id = nanoid()
        this.room$.next({
            cube: cube,
            id: id
        })

        return id
    }

    public startLoading() {
        this.loadingRoomInfo$.next(true)
    }

    public finishLoading() {
        this.loadingRoomInfo$.next(false)
    }
}
