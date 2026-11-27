// Problem: Stone Removal Game
// Time: O(n)
// Space: 0(n)

var canAliceWin = function(n) {
    let currentValue = 10;
    let totalCnt = 0;
    while(n >= currentValue) {
        n -= currentValue;
        currentValue--;
        totalCnt++;
    }
    return totalCnt % 2 === 1;
}

console.log(canAliceWin(19));