// some tests of expected results iso2dec() and ec2iso()
// Run this via "node tests.js"

const decimaldate = require('./decimaldate');

// a list of tests: function, input, output
const tests = [
    ['dec2iso', 0.5, '0-07-01'],
    ['dec2iso', -0.5, '-1-07-01'],
    ['iso2dec', '0000-07-01', 0.498634],
    ['iso2dec', '-0001-07-01', -0.50274],
    ['iso2dec', '2000-01-01', 2000.001366],
    ['iso2dec', '1999-01-01', 1999.001370],
    ['iso2dec', '2000-12-31', 2000.998634],
    ['iso2dec', '+1999-12-31', 1999.998630],
    ['iso2dec', '+1999-07-01', 1999.497260],
    ['iso2dec', '-2000-01-01', -1999.998634],
    ['iso2dec', '-2000-12-31', -1999.001366],
    ['iso2dec', '-1000000-01-01', -999999.998634],
    ['iso2dec', '-1000000-12-31', -999999.001366],
    ['dec2iso', 2000.001366, '2000-01-01'],
    ['dec2iso', 1999.001370, '1999-01-01'],
    ['dec2iso', 2000.998634, '2000-12-31'],
    ['dec2iso', 1999.998630, '1999-12-31'],
    ['dec2iso', 1999.497260, '1999-07-01'],
    ['dec2iso', 1999.5, '1999-07-02'],
    ['dec2iso', 2000.5, '2000-07-01'],
    ['dec2iso', -2000.998634, '-2001-01-01'],
    ['dec2iso', -2000.001366, '-2001-12-31'],
    ['dec2iso', -2994.998634, '-2995-01-01'],
    ['dec2iso', -2994.001366, '-2995-12-31'],
    ['dec2iso', -1000000.998634, '-1000001-01-01'],
    ['dec2iso', -1000000.001366, '-1000001-12-31'],
];

console.log("Starting tests.")
let passcount = 0;
let failcount = 0;

tests.forEach(([funcname, argin, wantout]) => {
    const got = decimaldate[funcname](argin);
    const ok = got == wantout;

    if (ok) {
        console.log('OK');
        passcount++;
    }
    else {
        failcount++;
        console.log(`FAIL ${funcname}(${argin}) returned ${got} instead of expected ${wantout}`);
    }
});


console.log("All tests done.")
console.log(`${passcount} tests OK.`);
console.log(`${failcount} tests failed.`);
