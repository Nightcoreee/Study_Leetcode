//O(n^2)
//Solution: Brute Force
function MaxProSubarray_BF(nums: number[]): number {
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


//O(n)
//Solution: Kandane's Alogithrm
function MaxProSubarray_Kandane(nums: number[]): number {
    let curMax = 1;
    let curMin = 1;
    let res = nums[0];
    for (let num of nums) {
        let tmp = curMax * num;
        curMax = Math.max(Math.max(num * curMax, num * curMin), num);
        curMin = Math.max(Math.max(tmp, curMin * num), num);
        res = Math.max(res, curMax);
    }
    return res;
}

console.log(MaxProSubarray_Kandane([2,3,-2,4]));


//O(n)
//Solution: Prefix & Suffix
function MaxProSubarray_PS(nums: number[]): number {
    let res = nums[0];
    const n = nums.length;
    let Prefix = 0;
    let Suffix = 0;

    for (let i=0; i<nums.length; i++) {
        Prefix = nums[i] * (Prefix === 0 ? 1 : Prefix);
        Suffix = nums[n-1-i] * (Suffix === 0 ? 1 : Suffix);
        res = Math.max(Prefix, Suffix, res);
    }
    return res === -1 ? 0 : res;
}

console.log(MaxProSubarray_PS([2,3,-2,4]));