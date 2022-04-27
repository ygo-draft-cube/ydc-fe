import {Author} from "./author.model";
import {Card} from "./card.model";
import {RarityBreakdown} from "./rarity-breakdown.model";

export interface Cube {
    id: number
    tags: string[]
    name: string
    description: string
    cards: Card[]
    coverImage: string
    numberOfRounds: number
    packPerRound: number
    cardPerPack: number
    idealNumberOfPlayers: number
    maxNumberOfPlayers: number
    createdOn: Date
    lastUpdatedOn: Date
    author: Author,
    rarityBreakdown: RarityBreakdown
}
