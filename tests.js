// some tests of expected results iso2dec() and ec2iso()
// Run this via "node tests.js"

const decimaldate = require('./decimaldate');

// a list of tests: function, input, output
const tests = [
    ['isleapyear', 2000, true],
    ['isleapyear', 1900, false],
    ['isleapyear', 1, false],
    ['isleapyear', 4, true],
    ['isleapyear', -1, true],
    ['isleapyear', -2000, false],
    ['isleapyear', -1900, false],
    ['isleapyear', -2001, true],
    ['isleapyear', -1901, false],
    ['dec2iso', -0.998633, '-0001-01-01'],
    ['dec2iso', -0.5, '-0001-07-02'],  // non leap year, 1823rd day is July 2
    ['dec2iso', -0.001366, '-0001-12-31'],
    ['dec2iso', 0.001367, '0000-01-01'],
    ['dec2iso', 0.5, '0000-07-01'],  // 1 BCE, leap year; 183rd day is July 1 due to February being longer
    ['dec2iso', 0.998634, '0000-12-31'],  // 1 BCE, leap year; 183rd day is July 1 due to February being longer
    ['dec2iso', +1.001369, '0001-01-01'],
    ['dec2iso', +1.5, '0001-07-02'],  // non leap year, 1823rd day is July 2
    ['dec2iso', +1.998631, '0001-12-31'],
    ['dec2iso', +2.001369, '0002-01-01'],
    ['dec2iso', +2.5, '0002-07-02'],  // non leap year, 1823rd day is July 2
    ['dec2iso', +2.998631, '0002-12-31'],
    ['iso2dec', '-0002-01-01', -1.99863],
    ['iso2dec', '-0002-07-02', -1.5],  // non leap year, 1823rd day is July 2
    ['iso2dec', '-0002-12-31', -1.00137],
    ['iso2dec', '-0001-01-01', -0.99863],
    ['iso2dec', '-0001-07-02', -0.5],  // non leap year, 1823rd day is July 2
    ['iso2dec', '-0001-12-31', -0.00137],
    ['iso2dec', '0000-01-01', 0.00137],  // 1 BCE, leap year; 183rd day is July 1 due to February being longer
    ['iso2dec', '0000-07-02', 0.50137],  // 1 BCE, leap year; 183rd day is July 1 due to February being longer
    ['iso2dec', '0000-12-31', 0.99863],
    ['iso2dec', '0001-01-01', +1.00137],
    ['iso2dec', '0001-07-02', +1.5],  // non leap year, 1823rd day is July 2
    ['iso2dec', '0001-12-31', +1.99863],
    ['iso2dec', '0002-01-01', +2.00137],
    ['iso2dec', '0002-07-02', +2.5],  // non leap year, 1823rd day is July 2
    ['iso2dec', '0002-12-31', +2.99863],
];

console.log("Starting tests.")
let passcount = 0;
let failcount = 0;

tests.forEach(([funcname, argin, wantout]) => {
    const got = decimaldate[funcname](argin);
    const ok = got === wantout;

    if (ok) {
        console.log(`OK    ${funcname}(${argin}) = ${wantout}`);
        passcount++;
    }
    else {
        failcount++;
        console.log(`FAIL    ${funcname}(${argin}) returned ${got} instead of expected ${wantout}`);
    }
});

console.log("");
console.log("All tests done.")
console.log(`${passcount} tests OK.`);
console.log(`${failcount} tests failed.`);
