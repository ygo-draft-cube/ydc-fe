import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CubeInformationResolverData} from "../../resolvers/cube-information.resolver-data-interface";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ExpandImageModalComponent} from 'src/app/components/expand-image-modal/expand-image-modal.component';
import {Card} from "../../models/card.model";

@Component({
    templateUrl: './cube-information.page.html',
    styleUrls: ['./cube-information.page.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeInformationPage implements OnInit {
    CubeInformationResolverData!: CubeInformationResolverData
    modalRef: MdbModalRef<ExpandImageModalComponent> | null = null;

    constructor(public activatedRoute: ActivatedRoute, private modalService: MdbModalService) {
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
