const luhnSum = require('./luhnSum');

const convertInvalidToValidCard = (array) => {

    if (array.length < 13) {
        while (array.length < 13) {
            const randomNum = Math.floor(Math.random() * 10);
            array.push(randomNum);
        }
    }

    if (array.length > 16) {
        while (array.length > 16) {
            array.pop();
        }
    }

    if (array[0] < 3 || array[0] > 6) {
        const randomNum = Math.floor(Math.random() * 4) + 3;
        array[0] = randomNum;
    }

    if (luhnSum(array) % 10 !== 0) {
        const luhnSumArray = luhnSum(array);
        const lastDigit = luhnSumArray % 10;
        const diff = 10 - lastDigit;

        if (array[array.length - 1] >= diff) {
            array[array.length - 1] -= diff;
        } else {
            array[array.length - 1] -= 10 -diff;
        }
    }

    return array;
}

module.exports = convertInvalidToValidCard;