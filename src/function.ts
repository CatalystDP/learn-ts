interface Card {
    suit: string;
    card: number;
}
interface FunctionCard {
    (): Card
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): FunctionCard;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: [1, 2, 3],
    createCardPicker(this: Deck): FunctionCard {
        return (): Card => {
            return {
                suit:this.suits[0],
                card:this.cards[0]
            }  
        }
    }
};
let cardFactory:FunctionCard = deck.createCardPicker();
let card1:Card = cardFactory();
console.log('card',card1);