// Problem: Climbing Stairs II
// Time: O(n^2)
// Space: O(n)
// Solution: Dynamic Programming


var climbStairs = function(n, costs) {
    const dp = new Array(n + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 3 && j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j] + costs[i - 1] + j * j);
        }
    }
    return dp[n];
};

console.log(climbStairs(4, [1,2,3,4]));