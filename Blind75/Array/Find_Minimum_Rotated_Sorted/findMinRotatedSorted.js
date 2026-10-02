//O(n)
//Solution: Brute Force
var findMinRotatedSorted_BF = function(nums){
    return Math.min(...nums);
}

console.log(findMinRotatedSorted_BF([3,4,5,1,2]));


//O(logn)
//Solution: Binary Search
var findMinRotatedSorted_BS = function(nums){
    let l = 0;
    let r = nums.length - 1;
    let res = nums[0];

    while(l <= r) {
        if(nums[l] <= nums[r]) {
            res = Math.min(res, nums[l]);
            break;
        }

        let m = l + Math.floor((r - l)/2);
        res = Math.min(res, nums[m]);
        
        if(nums[m] >= nums[l]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return res;
}

console.log(findMinRotatedSorted_BS([3,4,5,1,2]));



//O(logn)
//Solution: Binary Search (Lower Bound)
var findMinRotatedSorted_BSLB = function(nums){
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l)/2);
        if (nums[m] < nums[r]) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return nums[l];
}

console.log(findMinRotatedSorted_BSLB([3,4,5,1,2]));