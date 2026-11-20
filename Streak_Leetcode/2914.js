// Problem: Minimum Number of Changes to Make Binary String Beautiful
// Time: O(n)
// Space: O(1)

var minChanges = function(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i += 2){
        if (s[i] != s[i + 1]) {
            cnt++;
        }
    }
    return cnt;
};

console.log(minChanges("1001"));