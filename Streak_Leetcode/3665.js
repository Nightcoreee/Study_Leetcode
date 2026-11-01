// Problem: hortest Path With At Most K Consecutive Identical Characters
// Time: O(n^2)
// Space: O(m.n)
// Solution: DP

var uniquePaths = function(grid) {
    const MOD = 1000000007;
    const m = grid.length, n = grid[0].length;
    const dp_right = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
    const dp_down = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));

    dp_right[0][0] = 1;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 0) {
                const total = (dp_right[i][j] + dp_down[i][j]) % MOD;
                dp_right[i][j+1] = (dp_right[i][j+1] + total) % MOD;
                dp_down[i+1][j] = (dp_down[i+1][j] + total) % MOD;
            } else {
                dp_down[i+1][j] = (dp_down[i+1][j] + dp_right[i][j]) % MOD;
                dp_right[i][j+1] = (dp_right[i][j+1] + dp_down[i][j]) % MOD;
            }
        }
    }
    return (dp_right[m-1][n-1] + dp_down[m-1][n-1]) % MOD;
};


// Other solution
var uniquePaths = function (grid) {
    const MOD = 1000000007;
    const m = grid.length;
    const n = grid[0].length;

    const f = Array.from({ length: n }, () => [0, 0]);
    f[0][0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                if (grid[i - 1][j] === 0) {
                    f[j][0] = (f[j][0] + f[j][1]) % MOD;
                } else {
                    f[j][0] = f[j][1];
                }
            }

            if (j > 0) {
                if (grid[i][j - 1] === 0) {
                    f[j][1] = (f[j - 1][0] + f[j - 1][1]) % MOD;
                } else {
                    f[j][1] = f[j - 1][0];
                }
            }
        }
    }

    return (f[n - 1][0] + f[n - 1][1]) % MOD;
};

console.log(uniquePaths([[0,1,0],[0,0,1],[1,0,0]]));