// Problem: Subarrays Distinct Element Sum of Squares I
// Time: O(n^2)
// Solution: Brute Force

var sumCounts = function(nums) {
    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        let seen = new Set();
        for (let j = i; j < nums.length; j++) {
            seen.add(nums[j]);
            ans += seen.size * seen.size;
        }
    }
    return ans;
}

console.log(sumCounts([1, 2, 1]));