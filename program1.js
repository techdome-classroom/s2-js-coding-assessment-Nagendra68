/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var mapping = {")": "(", "}": "{", "]": "["};

    for (var i = 0; i < s.length; i++) {
        if (s[i] in mapping) {
            if (stack.length === 0 || mapping[s[i]] !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };