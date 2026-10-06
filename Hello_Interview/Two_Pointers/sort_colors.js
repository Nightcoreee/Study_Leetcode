//O(n)
//Solution: Two Pointers
var sortColors_TP = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let current = 0;
    while (current <= right) {
        if (nums[current] === 0) {
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 2) {
            [nums[right], nums[current]] = [nums[current], nums[right]];
            right--;
        } else {
            current++;
        }
    }
    return nums;
}

console.log(sortColors_TP([0,0,2,1,2]));
