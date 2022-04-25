import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '../../core/material.module';
import {CardImageUrlPipe} from '../../pipes/card-image-url.pipe';
import {CubeService} from "../../services/cube.service";
import {ExpandImageModalComponent} from './expand-image-modal.component';

describe('ExpandImageModalComponent', () => {
    let component: ExpandImageModalComponent;
    let fixture: ComponentFixture<ExpandImageModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialModule],
            declarations: [ExpandImageModalComponent, CardImageUrlPipe],
            providers: [CubeService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpandImageModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
