const convertInvalidToValidCard = require('../functions/convertInvalidToValidCard');
const stringToArray = require('../functions/stringToArray');
const validateCard = require('../functions/validateCard');

describe(
    'convertInvalidToValidCard Test',
    () => {
        const testCases = [
            {
                received: stringToArray('5419131456871773'),
                expected: true
            },
            {
                received: stringToArray('2221000136'),
                expected: true
            },
            {
                received: stringToArray('2221005105105105105100'),
                expected: true
            }
        ];

        testCases.forEach(
            (testCase) => {
                test(
                    `
                    received: ${testCase.received.join('')} |
                    converted to valid: ${convertInvalidToValidCard(testCase.received).join('')} |
                    isValid: ${validateCard(convertInvalidToValidCard(testCase.received))} |
                    expected isValid: ${testCase.expected}`,
                    () => {
                        expect(validateCard(convertInvalidToValidCard(testCase.received))).toBe(testCase.expected);
                    })
            }
        )
    }
)