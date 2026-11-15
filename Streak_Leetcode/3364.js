// Problem: Minimum Positive Sum Subarray 
// Time: O(n)
// Space: O(1)
// Solution: Brute Force

var minPositiveSum = function(nums, l, r) {
    let minSum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let s = 0;
        for (let j = i; j < nums.length; j++) {
            s += nums[j];
            let k = j - i + 1;
            if (k >= l && k <= r && s > 0) {
                minSum = Math.min(minSum, s);
            }
        }
    }
    return minSum === Infinity ? -1 : minSum;
}

console.log(minPositiveSum([-2,2,-3,1], 2, 3));