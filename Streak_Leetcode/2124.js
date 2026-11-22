// Problem: Check if All A's Appears Before All B's
// Time: O(n)
// Space: O(1)


var checkString = function(s) {
    return !s.includes('ba');
}

// Other solution
var checkString = function(s) {
    let seen_b = false;

    for (const c of s) {
        if (c === 'b') seen_b = true;
        else if (seen_b) return false;
    }
    return true;
}

console.log(checkString("aaabbb"));