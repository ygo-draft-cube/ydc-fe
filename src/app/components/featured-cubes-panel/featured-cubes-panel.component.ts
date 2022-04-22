import {Component, Input, OnInit} from '@angular/core';
import {Cube} from "../../models/cube.model";

@Component({
    selector: 'app-featured-cubes-panel',
    templateUrl: './featured-cubes-panel.component.html',
    styleUrls: ['./featured-cubes-panel.component.scss']
})
export class FeaturedCubesPanelComponent implements OnInit {
    @Input() duelNightCubes: Cube[] | undefined
    @Input() popularCubes: Cube[] | undefined
    @Input() battlePackCubes: Cube[] | undefined

    constructor() {
    }

    ngOnInit(): void {
    }
}
