import getRandom from "./getRandomIndex";
import shuffle from "./shuffleArray";

function getCurrentCards(variants, size) {
    const useVariants = [...variants]
    const boardSize = size*size;
    let cards = [];

    while(cards.length !== boardSize) {
        const index = getRandom(0, useVariants.length - 1);
        const card = useVariants[index]

        cards = [...cards, card, card]
        useVariants.splice(index, 1);
    }

    return shuffle(cards);
}

export default getCurrentCards;