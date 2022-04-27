import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../environments/environment";

@Pipe({
    name: 'coverImageUrl',
    pure: true
})
export class CoverImageUrlPipe implements PipeTransform {
    transform(coverImage: string, ...args: unknown[]): unknown {
        return `${environment.cubeCoverUri}${coverImage}`
    }
}
