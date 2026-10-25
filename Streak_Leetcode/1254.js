// Problem: Number of Closed Islands
// Time: O(n^2)
// Solution: DFS

var closedIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    let res = 0;

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === 0) {
                res += dfs(i, j, grid, m, n) ? 1 : 0;
            }
        }
    }
    return res;
};

function dfs(i, j, grid, m, n) {
    if (i === 0 || j === 0 || i === m - 1 || j === n - 1) return grid[i][j] === 1;
    if (grid[i][j] === 1) return true;
    grid[i][j] = 1;
    const d1 = dfs(i-1, j, grid, m, n);
    const d2 = dfs(i+1, j, grid, m, n);
    const d3 = dfs(i, j-1, grid, m, n);
    const d4 = dfs(i, j+1, grid, m, n);
    return d1 && d2 && d3 && d4;
}


// Other Solution
var closedIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== 0) return;
        grid[i][j] = 1; 
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
        if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
            if (grid[i][j] === 0) dfs(i, j);
        }
        }
    }

    let count = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
        if (grid[i][j] === 0) {
            count++;
            dfs(i, j);
        }
        }
    }

    return count;
    };

// Other Solution
var closedIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    function dfs(r, c) {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return false;
        }
        if (grid[r][c] === 1) {
            return true;
        }
        grid[r][c] = 1;
        let closed = true;
        if (!dfs(r - 1, c)) closed = false;
        if (!dfs(r + 1, c)) closed = false;
        if (!dfs(r, c - 1)) closed = false;
        if (!dfs(r, c + 1)) closed = false;
        return closed;
    }
    let answer = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                if (dfs(r, c)) {
                    answer++;
                }
            }
        }
    }
    return answer;
};

console.log(closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]));