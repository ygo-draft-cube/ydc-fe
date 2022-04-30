import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../models/user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly user: BehaviorSubject<User | null>;
    readonly user$: Observable<User | null>;

    constructor() {
        this.user = new BehaviorSubject<User | null>(null);
        this.user$ = this.user.asObservable();
    }

    signIn() {
        const user = {id: 1, name: "User's Name"}
        this.user.next(user);
    }

    signOut() {
        this.user.next(null)
    }
}
