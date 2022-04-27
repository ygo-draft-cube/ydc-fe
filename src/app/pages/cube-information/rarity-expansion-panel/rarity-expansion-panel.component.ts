import {Component, Input, OnInit} from '@angular/core';
import {Cube} from "../../../models/cube.model";
import {Card} from "../../../models/card.model";
import {ExpandImageModalComponent} from "../../../components/expand-image-modal/expand-image-modal.component";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
    selector: 'app-rarity-expansion-panel',
    templateUrl: './rarity-expansion-panel.component.html',
    styleUrls: ['./rarity-expansion-panel.component.scss']
})
export class RarityExpansionPanelComponent implements OnInit {
    modalRef: MdbModalRef<ExpandImageModalComponent> | null = null;
    @Input() cube: Cube | undefined;
    @Input() rarityKey: string | undefined;
    @Input() rarityLabel: string | undefined;

    constructor(private modalService: MdbModalService) {
    }

    ngOnInit(): void {
    }

    openModal(card: Card) {
        this.modalRef = this.modalService.open(ExpandImageModalComponent, {
            modalClass: 'modal-dialog-centered',
            data: {
                card: card
            }
        })
    }
}
