// Problem: Maximize Sum of Squares of Digits
// Time: O(1)
// Solution: Greedy
var maxSumOfSquares = function(num, sum) {
    if (sum > 9 * num) {
        return "";
    }

    const k = Math.floor(sum / 9);
    const r = sum % 9;

    const hasRemainder = r > 0 ? 1 : 0;
    const zeros = num - k - hasRemainder;
    return "9".repeat(k) + (r > 0 ? String(r) : "") + "0".repeat(zeros);
}

console.log(maxSumOfSquares(2, 3)); 


// Other solution
var maxSumOfSquares = function (num, sum) {
    if (sum > 9 * num) {
        return "";
    }
    let r = sum % 9;
    let ans = "9".repeat(Math.floor(sum / 9));
    if (r > 0) {
        ans += String.fromCharCode("0".charCodeAt(0) + r);
    }
    ans += "0".repeat(num - ans.length);
    return ans;
};