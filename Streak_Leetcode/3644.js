// Problem: Maximum K to Sort a Permutation
// Time: O(n)
// Solution: Bitwise

var sortPermutation = function(nums) {
    let ans = -1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== i) {
            ans &= nums[i];
        } 
    }
    return ans === -1 ? 0 : ans;
};

console.log(sortPermutation([0,3,2,1]));