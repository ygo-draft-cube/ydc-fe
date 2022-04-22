import {Component, Input, OnInit} from '@angular/core';
import {Cube} from "../../models/cube.model";

@Component({
    selector: 'app-explore-cubes-panel',
    templateUrl: './explore-cubes-panel.component.html',
    styleUrls: ['./explore-cubes-panel.component.scss']
})
export class ExploreCubesPanelComponent implements OnInit {
    @Input() cubes: Cube[] | undefined

    constructor() {
    }

    ngOnInit(): void {
    }
}
