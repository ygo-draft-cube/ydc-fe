import {ProfilePicUrlPipe} from "./profile-pic-url.pipe";

describe('ProfilePicUrlPipe', () => {
    it('create an instance', () => {
        const pipe = new ProfilePicUrlPipe();
        expect(pipe).toBeTruthy();
    });
});
