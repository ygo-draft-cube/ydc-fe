import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {Card} from "../../models/card.model";

@Component({
    selector: 'app-expand-image-modal',
    templateUrl: './expand-image-modal.component.html',
    styleUrls: ['./expand-image-modal.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandImageModalComponent implements OnInit {
    card: Card | undefined

    constructor() {
    }

    ngOnInit(): void {
    }
}
