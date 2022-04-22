import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, zip} from 'rxjs';
import {CubeService} from "../services/cube.service";
import {CubeInformationResolverData} from "./cube-information.resolver-data-interface";


@Injectable({
    providedIn: 'root'
})
export class CubeInformationResolver implements Resolve<CubeInformationResolverData> {
    constructor(private service: CubeService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<CubeInformationResolverData> {
        const id: string | null = route.paramMap.get('id');
        const cube = this.service.getCubeById(id);

        return zip(
            cube,
            (cube) => ({
                cube
            })
        )
    }
}
