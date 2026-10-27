var createGrid = function(m, n) {
    const grid = ['.'.repeat(n)];
    for (let i = 1; i < m; i++) {
        grid.push('#'.repeat(n - 1) + '.');
    }
    return grid;
};

console.log(createGrid(3, 2));