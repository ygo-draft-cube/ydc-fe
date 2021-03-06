import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {MaterialModule} from "../../core/material.module";

describe('ToolbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialModule],
            declarations: [NavbarComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
