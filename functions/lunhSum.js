// Luhn algorithm
export function lunhSum(array) {
    let isDoubled = false;
    let numSum = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        numSum += isDoubled ? luhnDouble(array[i]) : array[i];
        isDoubled = !isDoubled;
    }

    return numSum;
}

const luhnDouble = (num) => {
    if (num * 2 >= 10) return num * 2 - 9;
    return num * 2;
}

export default lunhSum;