import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CubeSearchResolverData} from "../../resolvers/cube-search.resolver-data-interface";
import {CubeInformationResolverData} from "../../resolvers/cube-information.resolver-data-interface";

@Component({
    templateUrl: './cube-information.page.html',
    styleUrls: ['./cube-information.page.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeInformationPage implements OnInit {
    CubeInformationResolverData!: CubeInformationResolverData

    constructor(public activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
    }
}
