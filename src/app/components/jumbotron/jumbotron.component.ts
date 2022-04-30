import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class JumbotronComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
