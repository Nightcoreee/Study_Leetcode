// Problem: Subarrays Distinct Element Sum of Squares II
// Time: O(nlogn)
// Solution: Segment tree lazy

var sumCounts = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;
    const sum = new Array(4 * n).fill(0);
    const sq  = new Array(4 * n).fill(0);
    const lz  = new Array(4 * n).fill(0);

    const apply = (node, len, k) => {
        sq[node] = (sq[node] + 2 * k * sum[node] + k * k * len) % MOD;
        sum[node] = (sum[node] + k * len) % MOD;
        lz[node] += k;
    };

    const push = (node, l, r) => {
        if (lz[node] === 0) return;
        const mid = (l + r) >> 1;
        apply(2 * node, mid - l + 1, lz[node]);
        apply(2 * node + 1, r - mid, lz[node]);
        lz[node] = 0;
    };

    const update = (node, l, r, ql, qr) => {
        if (ql <= l && r <= qr) {
            apply(node, r - l + 1, 1);
            return;
        }
        push(node, l, r);
        const mid = (l + r) >> 1;
        if (ql <= mid) update(2 * node, l, mid, ql, qr);
        if (qr > mid) update(2 * node + 1, mid + 1, r, ql, qr);
        sum[node] = (sum[2 * node] + sum[2 * node + 1]) % MOD;
        sq[node]  = (sq[2 * node] + sq[2 * node + 1]) % MOD;
    };

    const last = new Map();
    let ans = 0;
    for (let j = 0; j < n; j++) {
        const prev = last.has(nums[j]) ? last.get(nums[j]) : -1;
        update(1, 0, n - 1, prev + 1, j);
        ans = (ans + sq[1]) % MOD;
        last.set(nums[j], j);
    }
    return ans;
};

console.log(sumCounts([1, 2, 1]));