import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
    transform(value: string | undefined, limit: number): string {
        if (!value) return "";

        let trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
