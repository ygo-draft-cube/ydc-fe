import {Injectable} from '@angular/core';
import {Cube} from "../models/cube.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CubeService {
    constructor(private http: HttpClient) {
    }

    getAllCubes(options: any): Observable<Cube[]> {
        const searchParams = {...options}
        Object.keys(searchParams).forEach((k: string | number) => searchParams[k] === undefined && delete searchParams[k])

        // todo: temp for json-server; api automatically handle searching for a tag in cube.tags
        console.log(searchParams)
        Object.keys(searchParams).forEach((k: string | number) => {
            const likeable = ['tags']
            console.log(k)
            if (likeable.includes(k.toString())) {
                searchParams[`${k}_like`] = searchParams[k];
                delete searchParams[k]
            }
            console.log(searchParams)
        })

        // todo: temp for json-server; api should automatically handle searching in name/description/card names for `search`
        if (searchParams.search) {
            searchParams.name_like = searchParams.search
        }

        // todo: temp for json-server; api should handle a default limit
        if (!searchParams._limit) {
            searchParams._limit = 9
        }

        const url = new URL(`${environment.apiUri}cubes`);
        url.search = new URLSearchParams(searchParams).toString();

        return this.http.get<Cube[]>(url.toString());
    }

    getFrontPageCubes(): Observable<Cube[]> {
        const url = new URL(`${environment.apiUri}featuredCubes`);
        return this.http.get<Cube[]>(url.toString());
    }

    getDuelNightCubes(): Observable<Cube[]> {
        const options = {
            tags_like: 'Duel Night',
            _limit: "3",
            _sort: "id",
            _order: "desc"
        }

        const url = new URL(`${environment.apiUri}cubes`);
        url.search = new URLSearchParams(options).toString();

        return this.http.get<Cube[]>(url.toString());
    }

    getBattlePackCubes(): Observable<Cube[]> {
        const options = {
            tags_like: 'Battle Pack',
            _limit: "3",
            _sort: "id",
            _order: "desc"
        }

        const url = new URL(`${environment.apiUri}cubes`);
        url.search = new URLSearchParams(options).toString();

        return this.http.get<Cube[]>(url.toString());
    }

    getPopularCubes(): Observable<Cube[]> {
        const url = new URL(`${environment.apiUri}popularCubes`);
        return this.http.get<Cube[]>(url.toString());
    }

    getFeaturedCubes(): Observable<Cube[]> {
        const url = new URL(`${environment.apiUri}featuredCubes`);
        return this.http.get<Cube[]>(url.toString()).pipe();
    }

    getCubeById(id: string | null): Observable<Cube> {
        // 1 21 popular
        // 1 19 13 14 21 20 featured

        // const pp1 = this.http.delete<Cube>((new URL(`${environment.apiUri}popularCubes/1`)).toString()).toPromise()
        // const pp21 = this.http.delete<Cube>((new URL(`${environment.apiUri}popularCubes/21`)).toString()).toPromise()
        // const ff1 = this.http.delete<Cube>((new URL(`${environment.apiUri}featuredCubes/1`)).toString()).toPromise()
        // const ff19 = this.http.delete<Cube>((new URL(`${environment.apiUri}featuredCubes/19`)).toString()).toPromise()
        // const ff13 = this.http.delete<Cube>((new URL(`${environment.apiUri}featuredCubes/13`)).toString()).toPromise()
        // const ff14 = this.http.delete<Cube>((new URL(`${environment.apiUri}featuredCubes/14`)).toString()).toPromise()
        // const ff21 = this.http.delete<Cube>((new URL(`${environment.apiUri}featuredCubes/21`)).toString()).toPromise()
        // const ff20 = this.http.delete<Cube>((new URL(`${environment.apiUri}featuredCubes/20`)).toString()).toPromise()

        // const pc1 = this.http.get<Cube>((new URL(`${environment.apiUri}cubes/1`)).toString()).toPromise()
        // const pc21 = this.http.get<Cube>((new URL(`${environment.apiUri}cubes/21`)).toString()).toPromise()
        // const pc19 = this.http.get<Cube>((new URL(`${environment.apiUri}cubes/19`)).toString()).toPromise()
        // const pc13 = this.http.get<Cube>((new URL(`${environment.apiUri}cubes/13`)).toString()).toPromise()
        // const pc14 = this.http.get<Cube>((new URL(`${environment.apiUri}cubes/14`)).toString()).toPromise()
        // const pc20 = this.http.get<Cube>((new URL(`${environment.apiUri}cubes/20`)).toString()).toPromise()
        //
        // // Promise.all([pp1, pp21, ff1, ff19, ff13, ff14, ff21, ff20]).then(
        // //     () => {
        // //         console.log('deleted')
        // //     })
        //
        // Promise.all([pc1, pc21, pc19, pc13, pc14, pc20]).then(
        //     ([c1, c21, c19, c13, c14, c20]) => {
        //         this.http.post<Cube>((new URL(`${environment.apiUri}featuredCubes`)).toString(), c20).toPromise()
        //     })


        // this.http.get<Cube>(url.toString()).toPromise().then(cube => {
        //     console.log(cube)
        //     const _cube = {...cube}
        //     const cardDb = {}
        //     // @ts-ignore
        //     cards.forEach(({id, name}) => cardDb[id] = ({id, name, image: `./assets/card-pics/${id}.jpg`}))
        //     // @ts-ignore
        //     _cube.cards = _cube?.cardIds?.map((id: string) => cardDb[id])
        //     console.log(cardDb)
        //     this.http.put<Cube>(url.toString(), _cube).toPromise().then(cube2 => console.log(cube2))
        // })

        // this.http.get<Cube>(url.toString()).toPromise().then(cube => {
        //     const cards = cube?.cards
        //     const cardIds = cube?.cardIds
        //
        //     console.log(cards, cardIds)
        //
        //     const promises = []
        //     for (let i = 1; i <= 20; i++) {
        //         const url2 = new URL(`${environment.apiUri}cubes/${i}`);
        //         const call = this.http.patch<Cube>(url2.toString(), {cards, cardIds}).toPromise()
        //         promises.push(call)
        //     }
        //     Promise.all(promises).then(args => console.log(args))
        // })

        // this.http.get<Cube>(url.toString()).toPromise().then(cube => {
        //     const cardIds = cube?.cardIds.map(id => parseInt(id, 10))
        //     console.log(cardIds)
        //
        //     const promises = []
        //     for (let i = 1; i <= 21; i++) {
        //         const url2 = new URL(`${environment.apiUri}cubes/${i}`);
        //         const call = this.http.patch<Cube>(url2.toString(), {cardIds}).toPromise()
        //         promises.push(call)
        //     }
        //
        //     Promise.all(promises).then(args => console.log(args))
        // })

        const url = new URL(`${environment.apiUri}cubes/${id}`);
        return this.http.get<Cube>(url.toString())
    }
}
