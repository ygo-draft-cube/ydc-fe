import {Pipe, PipeTransform} from '@angular/core';
import {Card} from "../models/card.model";

@Pipe({
    name: 'cardNames'
})
export class CardNamesPipe implements PipeTransform {

    transform(cards: Card[]): string[] {
        return cards.map(c => c.name);
    }

}
