import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CubeSearchResolverData} from "../../resolvers/cube-search.resolver-data-interface";

@Component({
    templateUrl: './cube-search.page.html',
    styleUrls: ['./cube-search.page.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CubeSearchPage implements OnInit {
    CubeSearchResolverData!: CubeSearchResolverData

    constructor(public activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

}
