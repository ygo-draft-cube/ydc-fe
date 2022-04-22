import {Injectable} from '@angular/core';
import {Cube} from "../models/cube.model";
import {map, Observable, of} from "rxjs";
import cubes from "../../assets/cubes.json"
import cards from "../../assets/cards.json"
import {Card} from "../models/card.model";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CubeService {
    private readonly cubes: Cube[]
    private readonly cards: Card[]
    private cardsDb: any = {}

    constructor(private http: HttpClient) {
        this.cards = cards.map(({id, name}) => ({id: id.toString(), name, image: ""}))
        this.cards.forEach(card => this.cardsDb[card.id] = card)

        this.cubes = cubes.map(cube => ({
            ...cube,
            cards: cube.cardIds
                // filter out dups
                .filter((id, index) => cube.cardIds.findIndex((j) => j === id) === index)
                // get card info from ids
                .map(cardId => this.cardsDb[cardId])
                // put in random order
                .sort(() => Math.random() - Math.random())
        }))
    }

    getAllCubes(options: any): Observable<Cube[]> {
        options = {
            tags: options.tag
        }

        const url = new URL(`${environment.apiUri}cubes`);
        url.search = new URLSearchParams(options).toString();

        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.get<Cube[]>(url.toString(), {headers: headers});
    }

    getFrontPageCubes(): Observable<Cube[]> {
        const duelNights = this.cubes.filter(cube => cube.tags.includes('Duel Night')).sort(() => Math.random() - Math.random()).slice(0, 1)
        const battlePack = this.cubes.filter(cube => cube.tags.includes('Battle Pack')).sort(() => Math.random() - Math.random()).slice(0, 2)

        const cubes = [...duelNights, ...battlePack]
        return of(cubes)
    }

    getDuelNightCubes(): Observable<Cube[]> {
        const cubes = CubeService.sortById(this.cubes.filter(cube => cube.tags.includes('Duel Night'))).reverse().slice(0, 5)
        return of(cubes)
    }

    getBattlePackCubes(): Observable<Cube[]> {
        const cubes = CubeService.sortById(this.cubes.filter(cube => cube.tags.includes('Battle Pack'))).reverse()
        return of(cubes)
    }

    getPopularCubes(): Observable<Cube[]> {
        const cubes = [...this.cubes]
        cubes.sort(() => Math.random() - Math.random())
        return of(cubes.slice(0, 4))
    }

    getCubeById(id: string | null): Observable<Cube> {
        const match = this.cubes.find(cube => cube.id === id)
        if (match) return of(match)
        throw new Error("Cube not found")
    }

    private static sortById(arr: Cube[]) {
        return arr.sort((a, b) => a.id.localeCompare(b.id))
    }
}
