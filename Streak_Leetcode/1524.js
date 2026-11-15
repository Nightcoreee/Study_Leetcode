// Problem: Number of Sub-arrays With Odd Sum
// Time: O(n)
// Space: O(1)
// Solution: Prefix Sum

var numOfSubarrays = function(arr) {
    let oldCnt = 0, evenCnt = 1;
    let runSum = 0, res = 0;
    let MOD = 1e9 + 7;

    for (let i = 0; i < arr.length; i++) {
        runSum += arr[i];
        if (runSum % 2 === 0) {
            res = (res + oldCnt) % MOD;
            evenCnt++;
        } else {
            res = (res + evenCnt) % MOD;
            oldCnt++;
        }
    }
    return res;
};

console.log(numOfSubarrays([1,3,5]));