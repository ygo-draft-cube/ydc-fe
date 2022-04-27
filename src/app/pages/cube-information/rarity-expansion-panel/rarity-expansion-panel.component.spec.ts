import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RarityExpansionPanelComponent} from './rarity-expansion-panel.component';
import {MaterialModule} from "../../../core/material.module";
import {FilterRarityPipe} from "../../../pipes/filter-rarity.pipe";

describe('RarityExpansionPanelComponent', () => {
    let component: RarityExpansionPanelComponent;
    let fixture: ComponentFixture<RarityExpansionPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialModule],
            declarations: [RarityExpansionPanelComponent, FilterRarityPipe]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RarityExpansionPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
