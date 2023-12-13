import validateCard from "./validateCard";

const findInvalidCards = (nestedArray) => {
    return nestedArray.filter(card => !validateCard(card));
}

export default findInvalidCards;