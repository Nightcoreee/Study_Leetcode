//O(n^2) time complexity
//Solution: Brute Force
function MaxProfit_BF(prices: number[]): number {
    let max_profit = 0;
    for (let i=0; i<prices.length; i++) {
        let buy = prices[i];
        for (let j=i+1; j<prices.length; j++) {
            let sell = prices[j];
            max_profit = Math.max(max_profit, sell - buy);
        }
    }
    return max_profit;
};
console.log(MaxProfit_BF([7,1,5,3,6,4]));


//O(n) time complexity
//Solution: Two Pointers
function MaxProfit_TwoPointers(prices: number[]): number {
    let l = 0; 
    let r = 1; 
    let max_profit = 0;   
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            max_profit = Math.max(max_profit, profit);
        } else {
            l = r;
        }
        r++;
    }
    return max_profit;
};

console.log(MaxProfit_TwoPointers([7,1,5,3,6,4]));


//O(n) time complexity
//Solution: Dynamic Programming
function MaxProfit_DP(prices: number[]): number {
    let min_price = prices[0];
    let max_profit = 0;
    for (let sell of prices) {
        max_profit = Math.max(max_profit, sell - min_price);
        min_price = Math.min(min_price, sell);
    }
    return max_profit;
}
    
console.log(MaxProfit_DP([7,1,5,3,6,4]));
