import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, zip} from 'rxjs';
import {CubeService} from "../services/cube.service";
import {CubeSearchResolverData} from "./cube-search.resolver-data-interface";

@Injectable({
    providedIn: 'root'
})
export class CubeSearchResolver implements Resolve<CubeSearchResolverData> {
    constructor(private service: CubeService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CubeSearchResolverData> {
        const cubes = this.service.getAllCubes(route.queryParams)

        return zip(
            cubes,
            (cubes) => ({
                cubes
            })
        )
    }
}
