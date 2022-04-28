import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'removeDups',
    pure: true
})
export class RemoveDupsPipe implements PipeTransform {
    transform<T>(arr: T[]): T[] {
        return [...new Set(arr)]
    }
}
