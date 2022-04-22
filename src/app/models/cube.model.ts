import {Card} from "./card.model";

export interface Cube {
    id: string
    name: string
    tags: string[]
    image: string
    description: string
    numberOfPlayers: string;
    cardIds: string[]
    cards: (Card | undefined)[]
}
