import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Cube} from "../../models/cube.model";

@Component({
    selector: 'app-cube-feature-type',
    templateUrl: './cube-feature-type.component.html',
    styleUrls: ['./cube-feature-type.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CubeFeatureTypeComponent implements OnInit {
    @Input() name!: string;
    @Input() description!: string;
    @Input() cubes: Cube[] | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }
}
