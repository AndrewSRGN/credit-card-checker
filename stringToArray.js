const stringToArray = (string) => {
    if (typeof string !== 'string') return console.log('Not a string');
    if (string.length === 0) return console.log('Empty string');

    const array = string.split('');

    return array.every(char => {return char >= '0' && char <= '9'}) ? array : console.log('Not a string of numbers');
}

export default stringToArray;
