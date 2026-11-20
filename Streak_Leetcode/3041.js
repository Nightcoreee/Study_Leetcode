// Problem: Maximize Consecutive Elements in an Array After Modification
// Time: O(n log n)
// Space: O(n)

var maxSelectedElements = function(nums) {
    nums.sort((a,b) => a - b);
    let ans = 1;
    const max = nums[nums.length - 1];
    const dp = new Int32Array(max + 2);

    for (const n of nums) {
        dp[n + 1] = dp[n] + 1;
        dp[n] = dp[n - 1] + 1;
        ans = Math.max(ans, dp[n], dp[n + 1]);
    }
    return ans;
};

console.log(maxSelectedElements([2,1,5,1,1]));