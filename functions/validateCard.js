const luhnSum = require('./luhnSum.js')

const validateCard = (array) => {

    if (array.length < 13 || array.length > 16) return false;

    const numSum = luhnSum(array);

    return numSum % 10 === 0;
}

module.exports = validateCard;