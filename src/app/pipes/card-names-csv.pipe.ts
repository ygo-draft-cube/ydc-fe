import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'toCsv',
    pure: true
})
export class ToCsvPipe implements PipeTransform {
    transform<T>(input: T[], sep = ','): string {
        return input.filter(c => c).join(sep);
    }
}
