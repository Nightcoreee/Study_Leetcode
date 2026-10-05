//O(n)
//Solution: Two pointers
var move_zeroes_TP = function(nums) {
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
    }
    return nums;
}

console.log(move_zeroes_TP([0, 1, 0, 3, 12]));