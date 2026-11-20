// Problem: Minimum Score by Changing Two Elements
// Time: O(1);
// Space: O(1);

var minimizeSum = function(nums) {
    nums.sort((a, b) => a - b);
    n = nums.length;

    const case1 = nums[n - 1] - nums[2];
    const case2 = nums[n - 3] - nums[0];
    const case3 = nums[n - 2] - nums[1];

    return Math.min(case1, case2, case3);    
   
};

console.log(minimizeSum([1,4,7,8,5]));