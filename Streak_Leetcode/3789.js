// Problem: Minimum Cost to Acquire Required Items
// Time: O(1)
// Space: O(1)

var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    const mn = Math.min(need1, need2);
    const mx = Math.max(need1, need2);
    const c1 = cost1, c2 = cost2, cb = costBoth;
    const n1 = need1, n2 = need2;
    
    const opt1 = n1 * c1 + n2 * c2;
    const opt2 = mx * cb;
    const opt3 = mn * cb + (n1 - mn) * c1 + (n2 - mn) * c2;

    return Math.min(opt1, opt2, opt3);
};

console.log(minimumCost(3, 2, 1, 3, 2));