import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,} from '@angular/router';
import {Observable, of, switchMap} from 'rxjs';
import {UserService} from "../services/user.service";

@Injectable({
    providedIn: 'root'
})
export class UserIsLoggedInGuard implements CanActivate {
    constructor(public userService: UserService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.userService.user$.pipe(
            switchMap((user: any) => {
                return of(!!user)
            })
        );
    }
}
