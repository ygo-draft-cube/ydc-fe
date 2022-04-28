import {ToCsvPipe} from './card-names-csv.pipe';

describe('CardNamesCsvPipe', () => {
    it('create an instance', () => {
        const pipe = new ToCsvPipe();
        expect(pipe).toBeTruthy();
    });
});
