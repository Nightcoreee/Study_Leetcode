//O(n^2) 
//Solution: Brute Force
var maxSubArray_BF = function(nums) {
    let n = nums.length;
    let res = nums[0];

    for (let i=0; i<n-1; i++) {
        let curNum = 0;
        for (let j=i; j<n; j++) {
            curNum += nums[j];
            res = Math.max(res, curNum);
        }
    }
    return res;
}

console.log(maxSubArray_BF([-2,1,-3,4,-1,2,1,-5,4]));


//O(2^n)
//Solution: Recursion
var Subarray_Recursion = function(nums) {
    const dfs = (i, flag) => {
            if (i === nums.length) return flag ? 0 : -Infinity;
            if (flag) return Math.max(0, nums[i] + dfs(i + 1, true));
            return Math.max(dfs(i + 1, false), nums[i] + dfs(i + 1, true));
        };
        return dfs(0, false);
}

console.log(Subarray_Recursion([-2,1,-3,4,-1,2,1,-5,4]));


//O(n)
//Solution: Dynamic Programming
var maxSubArray_DP = function(nums) {
        //copy mảng nums vào dp
        let dp = [...nums];
        for (let i = 1; i < nums.length; i++) {
            dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
        }
        return Math.max(...dp);
}

console.log(maxSubArray_DP([-2,1,-3,4,-1,2,1,-5,4]));


//O(n)
//Solution: Kadane's Algorithm
var maxSubArray_Kadane = function(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for(let i=1; i<nums.length; i++) {
        maxEndingHere = Math.max(nums[i], nums[i] + maxEndingHere);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

console.log(maxSubArray_Kadane([-2,1,-3,4,-1,2,1,-5,4]));