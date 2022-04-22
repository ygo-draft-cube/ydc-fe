import {Component, Input, OnInit} from '@angular/core';
import {Cube} from "../../models/cube.model";

@Component({
    selector: 'app-explore-cube-list',
    templateUrl: './explore-cube-list.component.html',
    styleUrls: ['./explore-cube-list.component.scss']
})
export class ExploreCubeListComponent implements OnInit {
    @Input() cubes: Cube[] | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }
}
