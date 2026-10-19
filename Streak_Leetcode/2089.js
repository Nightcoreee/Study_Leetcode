// Problem: Find Target Indices After Sorting Array
// Time: O(n)
// Solution: Brute Force

var targetIndices = function(nums, target) {
    const res = new Array();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            res.push(i);
        }
    }
    return res;
};

console.log(targetIndices([1,2,5,2,3], 2));