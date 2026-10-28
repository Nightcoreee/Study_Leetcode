// Problem: Create Grid With Exactly One Path
// Time: O(n^2)
// Solution: Brute Force

// L direction
var createGrid = function(m, n) {
    const grid = Array.from({length: m}, () => Array(n).fill('#'));

    for(let j = 0; j < n; j++) {
        grid[m - 1][j] = '.';
    }

    for(let i = 0; i < m; i++) {
        grid[i][0] = '.';
    }

    return grid.map(row => row.join(''));
};


// L reverse
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


// Solution: Zigzag
// Time: O(n^2)
var createGrid = function (m, n) {
    const grid = Array.from({ length: m }, () => Array(n).fill('#'));

    let i = 0, j = 0;
    let goRight = true; 

    while (i < m - 1 || j < n - 1) {
        if (i === m - 1) {
        j++;                   
        } else if (j === n - 1) {
        i++;                   
        } else if (goRight) {
        j++;
        goRight = false;
        } else {
        i++;
        goRight = true;
        }
        grid[i][j] = '.';
  }

  return grid.map(row => row.join(''));
};


// Other Solution
// Time: 0(n^2)
var createGrid = function(m, n) {
    const grid = ['.'.repeat(n)];
    for (let i = 1; i < m; i++) {
        grid.push('#'.repeat(n - 1) + '.');
    }
    return grid;
};


console.log(createGrid(3, 2));