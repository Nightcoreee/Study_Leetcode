//O(n^2)
//Solution: Brute Force
var maxProSubarray_BR = function(nums) {
    let res = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        res = Math.max(res, cur);
        for (let j = i + 1; j < nums.length; j++) {
            cur *= nums[j];
            res = Math.max(res, cur);
        }
    }
    return res;
}

console.log(maxProSubarray_BR([2,3,-2,4]));


//O(n)
//Solution: Kadane's Algorithm
var maxProSubarray_Kadane = function(nums) {
    let res = nums[0];
    let curMin = 1;
    let curMax = 1;

    for (const num of nums) {
         const tmp = curMax * num;
            curMax = Math.max(Math.max(num * curMax, num * curMin), num);
            curMin = Math.min(Math.min(tmp, num * curMin), num);
            res = Math.max(res, curMax);
        return res;
    }
}

console.log(maxProSubarray_Kadane([2,3,-2,4]));


//O(n)
//Solution: Prefix & Suffix
var maxProSubarray_PS = function(nums) {
    let Prefix = 0;
    let Suffix = 0;
    const n = nums.length;
    let res = nums[0];

    for (let i=0; i<nums.length; i++) {
        //left to right
        Prefix = nums[i] * (Prefix === 0 ? 1 : Prefix);
        //opposite
        Suffix = nums[n-1-i] * (Suffix === 0 ? 1 : Suffix);
        res = Math.max(res, Prefix, Suffix);
    }
    return res === -0 ? 0 : res;
}

console.log(maxProSubarray_PS([2,3,-2,4]));