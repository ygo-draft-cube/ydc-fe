import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../environments/environment";

@Pipe({
    name: 'profilePicUrl',
    pure: true
})
export class ProfilePicUrlPipe implements PipeTransform {
    transform(id: number, ...args: unknown[]): unknown {
        return `${environment.profilePicUri}${id}.jpg`
    }
}
