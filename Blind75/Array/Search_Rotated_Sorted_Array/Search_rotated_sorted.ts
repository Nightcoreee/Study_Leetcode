//O(n)
//Solution: Brute Force
function SearchRotatedSorted_BF(nums: number[]): number {
    let target = Math.min(...nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(SearchRotatedSorted_BF([3,4,5,6,1,2]));