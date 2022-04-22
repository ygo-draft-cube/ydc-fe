import {Pipe, PipeTransform} from '@angular/core';
import {Card} from "../models/card.model";

@Pipe({
    name: 'cardNamesCsv'
})
export class CardNamesCsvPipe implements PipeTransform {
    transform(input: Array<Card | undefined>, sep = ','): string {
        return input.filter(c => c).map(card => card?.name).join(sep);
    }
}
