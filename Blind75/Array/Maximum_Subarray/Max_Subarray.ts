//O(n^2) 
//Solution: Brute Force
function MaxSubArray_BF(nums: number[]): number {
    let n = nums.length;
    let res = nums[0];
    for (let i=0; i<n; i++) {
        let curNum = 0;
        for (let j=i; j<n; j++) {
            curNum += nums[j];
            res = Math.max(res, curNum);
        }
    }
    return res;
}

console.log(MaxSubArray_BF([-2,1,-3,4,-1,2,1,-5,4]));


//O(2^n)
//Solution: Recursion
function MaxSubarray_Recursion(nums: number[]): number {
    const dfs = (i: number, flag: boolean): number => {
            //Đk dừng đệ quy
            if (i === nums.length) return flag ? 0 : -Infinity;
            //Nếu đã chọn phần tử thì chỉ có thể chọn tiếp hoặc dừng lại
            if (flag) return Math.max(0, nums[i] + dfs(i + 1, true));
            //Nếu chưa chọn phần tử thì có thể chọn hoặc không chọn phần tử hiện tại
            return Math.max(
                dfs(i + 1, false), 
                nums[i] + dfs(i + 1, true));
        };
        return dfs(0, false);
}

console.log(MaxSubarray_Recursion([-2,1,-3,4,-1,2,1,-5,4]));


//O(n)
//Solution: Dynamic Programming
function MaxSubarray_DP(nums: number[]): number {
    let dp = [...nums];
    for(let i=1; i<nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
    }
    return Math.max(...dp);
}   

console.log(MaxSubarray_DP([-2,1,-3,4,-1,2,1,-5,4]));


//O(n)
//Solution: Kadane's Algorithm
function MaxSubarray_Kadane(nums: number[]): number {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];
    for (let i=1; i<nums.length; i++) {
        maxEndingHere = Math.max(nums[i], nums[i] + maxEndingHere);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}