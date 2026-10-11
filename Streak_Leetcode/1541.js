//O(n)
//Solution: Greedy
var minInsertions = function(s) {
    let open = 0;
    let insert = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else {
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++;        
            } else {
                insert++;
            }

            if (open === 0) {
                insert++;
            } else {
                open--;     
            }
        }
    }
    return insert + open * 2;
};

console.log(minInsertions("(()))"));