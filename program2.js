/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (typeof s !== 'string' || s.length === 0) return 0;

    const romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];
        result += current < next ? -current : current;
    }

    return result + romanMap[s[s.length - 1]];
};

module.exports = { romanToInt };