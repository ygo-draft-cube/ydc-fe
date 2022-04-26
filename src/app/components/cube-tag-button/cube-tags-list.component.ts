import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-cube-tags-list',
    templateUrl: './cube-tags-list.component.html',
    styleUrls: ['./cube-tags-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeTagsListComponent implements OnInit {
    @Input() tags: string[] | undefined;
    @Input() actives: string[];

    constructor() {
        this.actives = []
    }

    ngOnInit(): void {
    }
}
