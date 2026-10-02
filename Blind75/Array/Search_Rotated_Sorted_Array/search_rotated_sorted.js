//O(n)
//Solution: Brute Force
var searchRotatedSorted_BF = function(nums) {
    let target = Math.min(...nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        } 
    }
    return -1;
}

console.log(searchRotatedSorted_BF([3,4,5,6,1,2]));