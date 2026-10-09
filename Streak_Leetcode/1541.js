//O(n)
//Solution: Greedy
var minInsertions = function(s) {
    let open = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else {
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++;        
            } else {
                res++;
            }

            if (open > 0) {
                open--;
            } else {
                res++;     
            }
        }
    }
    return res + open * 2;
};

console.log(minInsertions("(()))"));