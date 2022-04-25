import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../environments/environment";

@Pipe({
    name: 'cardImageUrl',
    pure: true
})
export class CardImageUrlPipe implements PipeTransform {
    transform(id: number, ...args: unknown[]): unknown {
        return `${environment.cardImageUri}${id}.jpg`
    }
}
