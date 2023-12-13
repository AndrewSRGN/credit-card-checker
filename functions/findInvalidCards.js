const validateCard = require('./validateCard.js');

const findInvalidCards = (nestedArray) => {
    return nestedArray.filter(card => !validateCard(card));
}

module.exports = findInvalidCards;