// Problem: Count Islands With Total Value Divisible by K
// Time: O(n^2)
// Solution: DFS Stack

var countIslands = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0) continue;

        let sum = 0;
        const stack = [[i, j]];
        sum += grid[i][j];
        grid[i][j] = 0; 

        while (stack.length) {
            const [x, y] = stack.pop();
            for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] > 0) {
                sum += grid[nx][ny];
                grid[nx][ny] = 0;
                stack.push([nx, ny]);
            }
            }
        }

        if (sum % k === 0) count++;
        }
    }

    return count;
};

console.log(countIslands([[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]]));

// Solution: DFS Recursion (no safe for big grid)
var countIslands = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return 0;

        const val = grid[i][j];
        grid[i][j] = 0; 

        return (
        val +
        dfs(i + 1, j) +
        dfs(i - 1, j) +
        dfs(i, j + 1) +
        dfs(i, j - 1)
        );
    };

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
        if (grid[i][j] > 0) {
            if (dfs(i, j) % k === 0) count++;
        }
        }
    }

    return count;
};


// Solution: BFS
var countIslands = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0) continue;

        let sum = grid[i][j];
        grid[i][j] = 0; 
        const queue = [[i, j]];
        let head = 0;

        while (head < queue.length) {
            const [x, y] = queue[head++];
            for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] > 0) {
                sum += grid[nx][ny];
                grid[nx][ny] = 0;
                queue.push([nx, ny]);
                }   
            }
        }

        if (sum % k === 0) count++;
        }
    }

    return count;
};