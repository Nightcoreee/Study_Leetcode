//Time: O(nlogn)
//Space: O(n)
//Solution: Greedy
var maxAlternatingSum = function(nums) {
    const sq = nums.map(x => x * x).sort((a, b) => a - b);
    const n = sq.length;
    const k = Math.floor(n / 2);

    let res = 0;
    for (let i = 0; i < n; i++) {
        res += i < k ? -sq[i] : sq[i];
    }
    return res;
};

console.log(maxAlternatingSum([1,2,3]));