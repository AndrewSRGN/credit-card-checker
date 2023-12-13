const luhnDouble = (num) => {
    if (num * 2 >= 10) return num * 2 - 9;
    return num * 2;
}

const validateCard = (array) => {
    if (array.length < 13 || array.length > 16) return false;

    let isDoubled = false;
    let numSum = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        numSum += isDoubled ? luhnDouble(array[i]) : array[i];
        // console.log(`isDoubled: ${isDoubled}`);
        // console.log(`num: ${array[i]}`);
        // console.log(`numSum: ${numSum}`);
        isDoubled = !isDoubled;
    }

    return numSum % 10 === 0;
}

module.exports = validateCard;