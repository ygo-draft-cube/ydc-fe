import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, zip} from 'rxjs';
import {CubeService} from "../services/cube.service";
import {HomePageResolverData} from "./home-page.resolver-data-interface";


@Injectable({
    providedIn: 'root'
})
export class HomePageResolver implements Resolve<HomePageResolverData> {
    constructor(private service: CubeService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<HomePageResolverData> {
        const frontPageCubes = this.service.getFrontPageCubes()
        const duelNightCubes = this.service.getDuelNightCubes()
        const battlePackCubes = this.service.getBattlePackCubes()
        const popularCubes = this.service.getPopularCubes()

        return zip(
            frontPageCubes, duelNightCubes, battlePackCubes, popularCubes,
            (frontPageCubes, duelNightCubes, battlePackCubes, popularCubes) => ({
                frontPageCubes, duelNightCubes, battlePackCubes, popularCubes
            })
        )
    }
}
