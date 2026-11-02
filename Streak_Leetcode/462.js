// Problem: Minimum Moves to Equal Array Elements II
// Time: O(nlogn)
// Space: O(1)
// Solution: Median

var minMoves2 = function(nums) {
    let sum = 0;
    nums.sort((a, b) => a - b);
    const median = nums[Math.floor(nums.length / 2)];
    for(const n of nums) sum+= Math.abs(n - median);
    return sum;
};


// Other solution
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const median = nums[nums.length >> 1];
    let moves = 0;
    for (const n of nums) moves += Math.abs(n - median);
    return moves;
};

console.log(minMoves2([1,2,3]));
