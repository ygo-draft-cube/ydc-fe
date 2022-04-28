import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {RoomPage} from "./pages/room/room.page";
import {LoginRegisterPage} from './pages/login-register/login-register.page';
import {CubeInformationPage} from "./pages/cube-information/cube-information.page";
import {HomePageResolver} from "./resolvers/home-page.resolver";
import {CubeInformationResolver} from "./resolvers/cube-information.resolver";
import {CubeSearchPage} from "./pages/cube-search/cube-search.page";
import {HowToPage} from "./pages/how-to/how-to.page";
import {AboutUsPage} from "./pages/about-us/about-us.page";
import {NotFoundPage} from "./pages/not-found/not-found.page";
import {CubeSearchResolver} from "./resolvers/cube-search.resolver";
import {StartDraftLoadPagePage} from "./pages/start-draft-load-page/start-draft-load-page.page";

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        resolve: {
            data: HomePageResolver
        }
    }, {
        path: 'cubes',
        component: CubeSearchPage,
        resolve: {
            data: CubeSearchResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    }, {
        path: 'cubes/:id',
        component: CubeInformationPage,
        resolve: {
            data: CubeInformationResolver
        }
    }, {
        path: 'cubes/:id/draft',
        component: StartDraftLoadPagePage
    }, {
        path: 'draft-room/:roomId',
        component: RoomPage,
        resolve: {}
    }, {
        path: 'login-register',
        component: LoginRegisterPage,
    }, {
        path: "how-to",
        component: HowToPage
    }, {
        path: 'about-us',
        component: AboutUsPage
    }, {
        path: '**',
        component: NotFoundPage
    }
];

const routerConfigOptions: ExtraOptions = {
    // Restore the last scroll position
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled",
}

@NgModule({
    imports: [RouterModule.forRoot(routes, routerConfigOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
