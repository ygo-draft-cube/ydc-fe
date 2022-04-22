import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
    selector: 'app-cube-search',
    templateUrl: './cube-search-bar.component.html',
    styleUrls: ['./cube-search-bar.component.scss']
})
export class CubeSearchBarComponent implements OnInit {
    placeholderText: any;
    searchForm: FormGroup

    constructor(private router: Router, public fb: FormBuilder) {
        this.searchForm = fb.group({
            searchQuery: ['']
        })
        this.placeholderText = `Search for a cube... e.g. 'Goat Common Charity', 'Edison Meta', etc`
    }

    ngOnInit(): void {
    }

    async search() {
        return await this.router.navigate(['/cubes'], {
            queryParams: {search: this.searchForm.value.searchQuery},
            queryParamsHandling: 'merge'
        });
    }
}
