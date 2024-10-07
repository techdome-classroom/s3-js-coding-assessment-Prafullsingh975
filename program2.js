/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToInt = function(s) {
        const romanLetter = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    
        let res = 0;
    
        for (let i = 0; i < s.length; i++) {
            let curr = romanLetter[s[i]];
            let nex = romanLetter[s[i + 1]];
    
            if (nex && curr < nex) {
                res -= curr;
            } else {
                res += curr;
            }
        }
    
        return res;
    };
};


module.exports={romanToInt}