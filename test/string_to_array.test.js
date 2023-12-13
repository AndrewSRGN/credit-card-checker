const stringToArray = require('../stringToArray.js');

describe(
    'String to Array Tests',
    () => {
        const testCases = [
            {
                input: '',
                expected: 'Empty string'
            },
            {
                input: 32231,
                expected: 'Not a string'
            },
            {
                input: '322sd31',
                expected: 'Not a string of numbers'
            },
            {
                input: '123',
                expected: [1, 2, 3]
            },
            {
                input: '1234254325324324',
                expected: [1, 2, 3, 4, 2, 5, 4, 3, 2, 5, 3, 2, 4, 3, 2, 4]
            },
        ];

        testCases.forEach( testCase => {
            test (
                `input: ${testCase.input}, output: ${stringToArray(testCase.input)}, expected: ${testCase.expected}`,
                () => {
                    const result = stringToArray(testCase.input);
                    expect(result).toEqual(testCase.expected);
                }
            )
        })
    }
)