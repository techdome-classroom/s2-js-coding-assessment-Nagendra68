/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.length === 0) {
        return 0;
    }

    var romanMap = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    var result = 0;

    for (var i = 0; i < s.length - 1; i++) {
        if (romanMap[s[i]] < romanMap[s[i + 1]]) {
            result -= romanMap[s[i]];
        } else {
            result += romanMap[s[i]];
        }
    }

    result += romanMap[s[s.length - 1]]; // add the last numeral

    return result;
};

module.exports = { romanToInt };
