import {Pipe, PipeTransform} from '@angular/core';
import {Card} from "../models/card.model";

@Pipe({
    name: 'filterRarity',
    pure: true
})
export class FilterRarityPipe implements PipeTransform {
    transform(cards: Card[] | undefined, rarity: string | undefined): Card[] {
        if (!cards) return []
        if (!rarity) rarity = 'COMMON'
        return cards.filter(card => card.rarity === rarity);
    }
}
