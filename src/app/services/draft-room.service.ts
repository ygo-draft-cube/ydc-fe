import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cube} from "../models/cube.model";
import {nanoid} from "nanoid";


@Injectable({
    providedIn: 'root'
})
export class DraftRoomService {
    room$: BehaviorSubject<{ cube: (Cube | null); roomId: (string | null) }>
    loadingRoomInfo$: BehaviorSubject<boolean>

    constructor() {
        const initialRoom = {cube: null, roomId: null}
        this.room$ = new BehaviorSubject<{ cube: Cube | null, roomId: string | null }>(initialRoom)
        this.loadingRoomInfo$ = new BehaviorSubject<boolean>(false)
    }

    public startLoading() {
        this.loadingRoomInfo$.next(true)
    }

    public setRoomInfo(cube: Cube): string {
        const roomId = nanoid()
        this.room$.next({
            cube: cube,
            roomId: roomId
        })

        return roomId
    }

    public finishLoading() {
        this.loadingRoomInfo$.next(false)
    }
}
