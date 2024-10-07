/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const result = [];

    for (let char of s) {
        if (char in brackets) {
            const firstElement = result.length ? result.pop() : '#';

            if (brackets[char] !== firstElement) {
                return false;
            }
        } else {
            result.push(char);
        }
    }

    return result.length === 0;
};

module.exports = { isValid };


