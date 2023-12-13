
const validateCard = require('../validateCard');

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];


describe (
    'Validate Card tests',
    () => {
        const testCases = [
            {
                input: valid1,
                expected: true
            },
            {
                input: valid2,
                expected: true
            },
            {
                input: valid3,
                expected: true
            },
            {
                input: valid4,
                expected: true
            },
            {
                input: valid5,
                expected: true
            },
            {
                input: invalid1,
                expected: false
            },
            {
                input: invalid2,
                expected: false
            },
            {
                input: invalid3,
                expected: false
            },
            {
                input: invalid4,
                expected: false
            },
            {
                input: invalid5,
                expected: false
            },
        ];

        testCases.forEach( testCase => {
            test (
                `input: ${testCase.input}, expected: ${testCase.expected}`,
                () => {
                    const result = validateCard(testCase.input);
                    expect(result).toBe(testCase.expected);
                }
            )
        })
    }
)