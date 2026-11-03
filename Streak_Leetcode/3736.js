// Problem: Minimum Moves to Equal Array Elements III
// Time: O(n)
// Space: O(1)
// Solution: Brute Force

var minMoves = function(nums) {
    let num_Max = Math.max(...nums);
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += num_Max - nums[i];
    }
    return total;
};

// Other solution
var minMoves = function(nums) {
    const max = nums.reduce((a,c)=>Math.max(a,c),0)
    return nums.reduce((a,c)=>a+max-c,0)
};

console.log(minMoves([2,1,3]));