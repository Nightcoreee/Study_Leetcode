//O(n^2) time complexity
//Solution: Brute Force
var maxProfit = function(prices) {
    let max_profit = 0;
    for (let i=0; i<prices.length; i++) {
            let buy = prices[i];
        for (let j=i+1; j<prices.length; j++) {
            let sell = prices[j];
            max_profit = Math.max(max_profit,sell - buy);
        }
    }
    return max_profit;
}
console.log(maxProfit([7,1,5,3,6,4]));



//O(n) Solution: Two Pointer
var maxProfit_TP = function(prices) {
    let l = 0;
    let r = 1;
    let maxP = 0;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            maxP = Math.max(maxP, profit);
        } else {
            l = r;
        }
        r++;
    }
    return maxP;
}

console.log(maxProfit_TP([7,1,5,3,6,4]));

//O(n) Solution: Dynamic Programming
var maxProfit_DP = function(prices) {
    let maxP = 0;
    let minPrice = prices[0];
    for (let sell of prices) {
        maxP = Math.max(maxP, sell - minPrice);
        minPrice = Math.min(minPrice, sell);
    }
    return maxP;
}

console.log(maxProfit_DP([7,1,5,3,6,4]));
