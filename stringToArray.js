const stringToArray = (string) => {
    if (typeof string !== 'string') return 'Not a string';
    if (string.length === 0) return 'Empty string';

    const array = string.split('');

    return array.every(char => {return char >= '0' && char <= '9'}) ? array : 'Not a string of numbers';
}

module.exports = stringToArray;
