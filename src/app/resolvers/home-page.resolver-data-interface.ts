import {Cube} from "../models/cube.model";

export interface HomePageResolverData {
    frontPageCubes: Cube[],
    duelNightCubes: Cube[],
    battlePackCubes: Cube[],
    popularCubes: Cube[],
}
