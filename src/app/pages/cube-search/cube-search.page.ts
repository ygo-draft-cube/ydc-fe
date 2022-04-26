import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {CubeSearchResolverData} from "../../resolvers/cube-search.resolver-data-interface";

@Component({
    templateUrl: './cube-search.page.html',
    styleUrls: ['./cube-search.page.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CubeSearchPage implements OnInit {
    CubeSearchResolverData!: CubeSearchResolverData
    _page: number | undefined

    constructor(public activatedRoute: ActivatedRoute, public router: Router) {
        this._page = 1
    }

    ngOnInit(): void {
        const {_page} = this.activatedRoute.snapshot.queryParams;
        if (_page) {
            this._page = _page
        }

        console.log(_page)
    }

    changePage($event: PageEvent) {
        const queryParams = {
            _limit: $event.pageSize,
            _page: $event.pageIndex + 1
        }

        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams: queryParams,
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            });
    }
}
