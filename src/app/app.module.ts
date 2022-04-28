import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePage} from './pages/home/home.page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CoreModule} from './core/core.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CubeComponent} from './components/cube/cube.component';
import {RoomPage} from './pages/room/room.page';
import {CubeSearchListingCardComponent} from './components/cube-search-listing-card/cube-search-listing-card.component';
import {ToCsvPipe} from './pipes/card-names-csv.pipe';
import {LimitToPipe} from './pipes/limit-to.pipe';

import {CubeFeatureTypeComponent} from './components/cube-feature-type/cube-feature-type.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {FooterComponent} from './components/footer/footer.component';
import {CubeSearchBarComponent} from './components/cube-search-bar/cube-search-bar.component';
import {LoginRegisterPage} from './pages/login-register/login-register.page';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from "./components/login/login.component";
import {RoomInProgressAlertComponent} from './components/room-in-progress-alert/room-in-progress-alert.component';
import {
    ExploreCubeFilterSidenavComponent
} from './components/explore-cube-filter-sidenav/explore-cube-filter-sidenav.component';
import {ExploreCubeListComponent} from './components/explore-cube-list/explore-cube-list.component';
import {FeaturedCubesPanelComponent} from './components/featured-cubes-panel/featured-cubes-panel.component';
import {ExploreCubesPanelComponent} from './components/explore-cubes-panel/explore-cubes-panel.component';
import {CubeInformationPage} from './pages/cube-information/cube-information.page';
import {CubeSearchPage} from './pages/cube-search/cube-search.page';
import {AsPipe} from './pipes/as.pipe';
import {BtnOutlineFromTagPipe} from './pipes/btn-outline-from-tag.pipe';

import {ReactiveFormsModule} from '@angular/forms';
import {AboutUsPage} from './pages/about-us/about-us.page';
import {HowToPage} from './pages/how-to/how-to.page';
import {NotFoundPage} from './pages/not-found/not-found.page';
import {HttpClientModule} from "@angular/common/http";
import {ExpandImageModalComponent} from './components/expand-image-modal/expand-image-modal.component';
import {CardImageUrlPipe} from './pipes/card-image-url.pipe';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CubeTagsListComponent} from './components/cube-tag-button/cube-tags-list.component';
import {TagInActivesPipe} from './pipes/tag-in-actives.pipe';
import {CoverImageUrlPipe} from './pipes/cover-image-url.pipe';
import {ProfilePicUrlPipe} from "./pipes/profile-pic-url.pipe";
import {FilterRarityPipe} from './pipes/filter-rarity.pipe';
import {
    RarityExpansionPanelComponent
} from './pages/cube-information/rarity-expansion-panel/rarity-expansion-panel.component';
import {RaritySortPipe} from './pipes/rarity-sort.pipe';
import {RemoveDupsPipe} from './pipes/remove-dups.pipe';
import {CardNamesPipe} from './pipes/card-names.pipe';
import {StartDraftLoadPagePage} from './pages/start-draft-load-page/start-draft-load-page.page';


@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        NavbarComponent,
        CubeComponent,
        RoomPage,
        CubeSearchListingCardComponent,
        ToCsvPipe,
        LimitToPipe,
        CubeFeatureTypeComponent,
        JumbotronComponent,
        FooterComponent,
        CubeSearchBarComponent,
        LoginRegisterPage,
        RegisterComponent,
        LoginComponent,
        RoomInProgressAlertComponent,
        ExploreCubeFilterSidenavComponent,
        ExploreCubeListComponent,
        FeaturedCubesPanelComponent,
        ExploreCubesPanelComponent,
        CubeInformationPage,
        CubeSearchPage,
        AsPipe,
        BtnOutlineFromTagPipe,
        AboutUsPage,
        HowToPage,
        NotFoundPage,
        ExpandImageModalComponent,
        CardImageUrlPipe,
        CoverImageUrlPipe,
        ProfilePicUrlPipe,
        CubeTagsListComponent,
        TagInActivesPipe,
        FilterRarityPipe,
        RarityExpansionPanelComponent,
        RaritySortPipe,
        RemoveDupsPipe,
        CardNamesPipe,
        StartDraftLoadPagePage
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
