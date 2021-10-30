import { TestBed } from '@angular/core/testing';

import { DeckCardsService } from './deck-cards.service';

describe('DeckCardsService', () => {
  let service: DeckCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
