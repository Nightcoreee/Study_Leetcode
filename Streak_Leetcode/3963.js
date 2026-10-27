// Problem: Create Grid With Exactly One Path
// Time: O(n^2)
// Solution: Brute Force

var createGrid = function(m, n) {
    const grid = Array.from({length: m}, () => Array(n).fill('#'));

    for(let j = 0; j < n; j++) {
        grid[0][j] = '.';
    }

    for(let i = 0; i < m; i++) {
        grid[i][n - 1] = '.';
    }

    return grid.map(row => row.join(''));
};

console.log(createGrid(2, 3));