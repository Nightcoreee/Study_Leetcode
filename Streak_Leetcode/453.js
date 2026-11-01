// Problem: Minimum Moves to Equal Array Elements
// Time: O(n)
// Space: O(1)
// Solution: Brute Force

var minMoves = function(nums) {
    let numMin = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[numMin]) {
            numMin = i;
        }   
    }

    for (let i = 0; i < nums.length; i++) {
        total += nums[i] - nums[numMin];
    }
    return total;
};


// Other solution
var minMoves = function(nums) {
    const min = Math.min(...nums);
    return nums.reduce((sum, n) => sum + (n - min), 0);
}

console.log(minMoves([1,2,3]));