import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {Cube} from "../../models/cube.model";


@Component({
    selector: 'app-cube',
    templateUrl: './cube.component.html',
    styleUrls: ['./cube.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeComponent implements OnInit {
    @Input() popularCubes: Cube[] | undefined
    @Input() duelNightCubes: Cube[] | undefined
    @Input() battlePackCubes: Cube[] | undefined
    @Input() frontPageCubes: Cube[] | undefined

    constructor() {
    }

    ngOnInit(): void {
    }
}
