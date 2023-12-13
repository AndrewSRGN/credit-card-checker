const stringToArray = (string) => {
    if (typeof string !== 'string') return 'Not a string';
    if (string.length === 0) return 'Empty string';
    if (!string.split('').every(char => {return char >= '0' && char <= '9'})) return 'Not a string of numbers';

    return  string.split('').map(char => Number(char));
}

module.exports = stringToArray;
