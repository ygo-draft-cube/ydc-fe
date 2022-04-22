import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'btnOutlineFromTag',
    pure: true
})
export class BtnOutlineFromTagPipe implements PipeTransform {
    simpleHash(str: string) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash &= hash; // Convert to 32bit integer
        }
        return parseInt(new Uint32Array([hash])[0].toString(10), 10);
    };

    transform(value: string, ...args: unknown[]): string {
        const outlines = [
            'btn-outline-primary',
            'btn-outline-secondary',
            'btn-outline-success',
            'btn-outline-danger',
            'btn-outline-warning',
            'btn-outline-info'
        ]

        switch (value) {
            case 'Duel Night':
                return outlines[5];
            case 'Battle Pack':
                return outlines[1];
            default:
                const hash = this.simpleHash(value)
                const mod = hash % outlines.length
                return outlines[mod]
        }
    }
}
