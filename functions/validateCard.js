import lunhSum from './lunhSum.js';



const validateCard = (array) => {
    if (array.length !== 16) return false;

    const numSum = lunhSum(array);

    return numSum % 10 === 0;
}

export default validateCard;
