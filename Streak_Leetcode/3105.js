// Problem: Longest Strictly Increasing or Strictly Decreasing Subarray
// Time: O(n)
// Space: O(1)

var longestMonotonicSubarray = function(nums) {
    if(nums.length === 1) {
        return 1;
    }
    
    let ans = 1;
    let inc = 1, dec = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc++;
            dec = 1;
        } else if (nums[i] < nums[i - 1]) {
            dec++;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        ans = Math.max(ans, inc, dec);
    }
    return ans;
};

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2])); 