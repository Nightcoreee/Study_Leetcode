// Problem: Minimum Operations to Sort a Permutation
// Time: O(n)
// Solution:

var minOperations = function(nums) {
    const n = nums.length;
    let isASC = true;
    let isDESC = true;
    for(let i = 0; i < n; i++) {
        const cur = nums[i];
        const next = nums[(i + 1) % n];

        if(next !== (cur + 1) % n) {
            isASC = false;
        }
        
        if(next !== (cur - 1 + n) % n) {
            isDESC = false;
        }
    }
    
    if (!isASC && !isDESC) {
        return -1;
    }

    const p = nums.indexOf(0);
    let ans = Infinity;

    if(isASC) {
        ans = Math.min(ans, p, n - p + 2);
    }

    if(isDESC) {
        ans = Math.min(ans, n - p, ((p + 1) % n) + 1);
    }

    return ans;
}

console.log(minOperations([2,0,1,3]));