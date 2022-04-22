import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class JumbotronComponent implements OnInit {
    @Input() heading: string | undefined
    @Input() subheading: string | undefined
    @Input() imageHeight: string | undefined
    @Input() imageUrl: string | undefined

    constructor() {
    }

    ngOnInit(): void {
    }

}
