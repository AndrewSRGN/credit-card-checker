const validateCard = require('./validateCard');

const idInValidCards = (invalidBatch) => {
    const invalidCardsCompanys = [];

    invalidBatch.forEach(card => {
        if (!validateCard(card)) {
            switch (card[0]) {
                case 3:
                    if (invalidCardsCompanys.indexOf('Amex') === -1)
                        invalidCardsCompanys.push('Amex');
                    break;
                case 4:
                    if (invalidCardsCompanys.indexOf('Visa') === -1)
                        invalidCardsCompanys.push('Visa');
                    break;
                case 5:
                    if (invalidCardsCompanys.indexOf('Mastercard') === -1)
                        invalidCardsCompanys.push('Mastercard');
                    break;
                case 6:
                    if (invalidCardsCompanys.indexOf('Discover') === -1)
                        invalidCardsCompanys.push('Discover');
                    break;
                default:
                    if (invalidCardsCompanys.indexOf('Company not found') === -1)
                        invalidCardsCompanys.push('Company not found');
            }
        }
    })

    return invalidCardsCompanys;
}

module.exports = idInValidCards;