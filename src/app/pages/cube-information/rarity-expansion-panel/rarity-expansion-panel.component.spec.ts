import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RarityExpansionPanelComponent} from './rarity-expansion-panel.component';

describe('RarityExpansionPanelComponent', () => {
    let component: RarityExpansionPanelComponent;
    let fixture: ComponentFixture<RarityExpansionPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RarityExpansionPanelComponent]
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
