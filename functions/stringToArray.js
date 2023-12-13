const stringToArray = (string) => {
    if (typeof string !== 'string') return 'Not a string';
    if (string.length === 0) return 'Empty string';
    const stringArray = string.split('');

    if (stringArray.some(char => char <= '0' || char >= '9')) {
        return 'Not a string of numbers';
    }

    return stringArray.map(char => {
        return Number(char);
    });
}

console.log(stringToArray('12345'));
console.log(stringToArray('12345a'));
export default stringToArray;
