import validateCard from "./validateCard.js";

const findInvalidCards = (nestedArray) => {
    return nestedArray.filter(card => !validateCard(card));
}

export default findInvalidCards;