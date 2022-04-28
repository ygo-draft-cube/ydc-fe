import {Pipe, PipeTransform} from '@angular/core';
import {Card} from "../models/card.model";

@Pipe({
    name: 'raritySort',
    pure: true
})
export class RaritySortPipe implements PipeTransform {
    transform(cards: Card[]): Card[] {
        return [
            ...cards.filter(c => c.rarity === 'ULTIMATE_RARE').sort((a, b) => a.name.localeCompare(b.name)),
            ...cards.filter(c => c.rarity === 'ULTRA_RARE').sort((a, b) => a.name.localeCompare(b.name)),
            ...cards.filter(c => c.rarity === 'SUPER_RARE').sort((a, b) => a.name.localeCompare(b.name)),
            ...cards.filter(c => c.rarity === 'RARE').sort((a, b) => a.name.localeCompare(b.name)),
            ...cards.filter(c => c.rarity === 'COMMON').sort((a, b) => a.name.localeCompare(b.name)),
        ]
    }
}
