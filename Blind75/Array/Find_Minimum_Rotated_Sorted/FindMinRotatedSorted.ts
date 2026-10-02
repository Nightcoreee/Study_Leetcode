//O(n)
//Solution: Brute Force
function FindMinRotatedSorted_BR(nums: number[]): number {
    return Math.min(...nums);
}

console.log(FindMinRotatedSorted_BR([3,4,5,1,2]));

//O(logn)
//Solution: Binary Search
function FindMinRotatedSorted_BS(nums: number[]): number {
    let l = 0;
    let r = nums.length - 1;
    let res = nums[0];

    while (l <= r){
        if (nums[l] <= nums[r]) {
            res = Math.min(nums[l], res);
            break;
        }

        let m = l + Math.floor((r - l)/2);
        res = Math.min(res, nums[m]);

        if (nums[m] >= nums[l]){
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return res;
}

console.log(FindMinRotatedSorted_BS([3,4,5,1,2]));


//O(logn)
//Solution: Binary Search
function FindMinRotatedSorted_BSLB(nums: number[]): number {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l)/2);
        if (nums[m] < nums[r]){
            r = m;
        } else {
            l = m + 1;
        }
    }
    return nums[l];
}

console.log(FindMinRotatedSorted_BSLB([3,4,5,1,2]));