import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CubeSearchBarComponent} from './cube-search-bar.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";

describe('CubeSearchBarComponent', () => {
    let component: CubeSearchBarComponent;
    let fixture: ComponentFixture<CubeSearchBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, ReactiveFormsModule],
            declarations: [CubeSearchBarComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CubeSearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
