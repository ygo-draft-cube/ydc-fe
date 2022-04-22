import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Cube} from "../../models/cube.model";

@Component({
    selector: 'app-cube-overview-card',
    templateUrl: './cube-search-listing-card.component.html',
    styleUrls: ['./cube-search-listing-card.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeSearchListingCardComponent implements OnInit {
    @Input() cube: Cube | undefined

    constructor() {
    }

    ngOnInit(): void {
    }
}
