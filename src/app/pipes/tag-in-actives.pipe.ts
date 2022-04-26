import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'tagInActives',
    pure: true
})
export class TagInActivesPipe implements PipeTransform {
    transform(tag: string | undefined, actives: string[] | undefined): boolean | undefined {
        console.log(tag, actives)
        if (!actives) return;
        if (!tag) return;

        if (actives.includes(tag)) {
            console.log('match')
            return true;
        }

        return;
    }
}
