// Problem: Find Subtree Sizes After Changes
// Time: O(n)
// Space: O(n)

var findSubtreeSizes = function (parent, s) {
    const n = parent.length;
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[parent[i]].push(i);

    const newPar = [...parent];
    const last = new Array(26).fill(-1);
    const saved = new Array(n).fill(-1);
    const order = [];

    const stack = [[0, false]];
    while (stack.length) {
        const [x, leaving] = stack.pop();
        const c = s.charCodeAt(x) - 97;
        if (leaving) {
        last[c] = saved[x];
        continue;
        }
        order.push(x);
        saved[x] = last[c];
        if (x > 0 && last[c] !== -1) newPar[x] = last[c];
        last[c] = x;
        stack.push([x, true]);
        for (const ch of children[x]) stack.push([ch, false]);
    }

    const ans = new Array(n).fill(1);
    for (let i = n - 1; i >= 0; i--) {
        const x = order[i];
        if (x > 0) ans[newPar[x]] += ans[x];
    }
    return ans;
};

console.log(findSubtreeSizes([-1,0,4,0,1], "abbba"));