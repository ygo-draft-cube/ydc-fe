import { TestBed } from '@angular/core/testing';

import { DraftRoomService } from './draft-room.service';

describe('DraftRoomService', () => {
  let service: DraftRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
