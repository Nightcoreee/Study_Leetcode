//Time: O(n)
//Solution: Greedy each other bit
//Problem: Apply Operations on Array to Maximize Sum of Squares
var maxSum = function(nums, k) {
    const MOD = 1000000007n;
    const cnt = new Array(30).fill(0);

    for (const x of nums) {
        for (let b = 0; b < 30; b++) {
        if ((x >> b) & 1) cnt[b]++;
        }
    }

    let ans = 0n;
    for (let i = 0; i < k; i++) {
        let cur = 0;
        for (let b = 0; b < 30; b++) {
        if (cnt[b] > 0) {
            cur |= 1 << b;
            cnt[b]--;
        }
        }
        ans = (ans + BigInt(cur) * BigInt(cur)) % MOD;
    }
    return Number(ans);
};

console.log(maxSum([2,6,5,8], 2));