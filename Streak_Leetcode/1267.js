// Problem: Count Servers that Communicate
// Time: O(m*n)
// Space: O(m+n)
// Solution: Count rows and columns

var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);
    let cnt = 0;
    for ( let i = 0; i < m; i++) {
        for ( let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    for ( let i = 0; i < m; i++) {
        for ( let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                if (grid[i][j] && (rowCount[i] > 1 || colCount[j] > 1)) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

console.log(countServers([[1,0],[0,1]]));