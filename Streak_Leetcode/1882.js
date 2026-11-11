// Problem: Process Tasks Using Servers
// Time: O(n log n + m log n)
// Space: O(n + m)
// Solution: Min Heap

var assignTasks = function(servers, tasks) {
    const n = servers.length, m = tasks.length;
    const s = new Float64Array(n);
    for (let i = 0; i < n; i++) s[i] = servers[i] * 262144 + i;
    s.sort();
    const f = new Int32Array(n);
    for (let i = 0; i < n; i++) f[i] = i;
    let fs = n;
    const b = new Float64Array(n);
    let bs = 0;
    const res = new Array(m);
    let t = 0;
    for (let j = 0; j < m; j++) {
        if (t < j) t = j;
        if (fs === 0) {
            const e = Math.floor(b[0] / n);
            if (e > t) t = e;
        }
        while (bs > 0 && Math.floor(b[0] / n) <= t) {
            const r = b[0] % n;
            const x = b[--bs];
            let i = 0;
            while (true) {
                let c = 2 * i + 1;
                if (c >= bs) break;
                if (c + 1 < bs && b[c + 1] < b[c]) c++;
                if (b[c] >= x) break;
                b[i] = b[c];
                i = c;
            }
            b[i] = x;
            i = fs++;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (f[p] <= r) break;
                f[i] = f[p];
                i = p;
            }
            f[i] = r;
        }
        const r = f[0];
        const x = f[--fs];
        let i = 0;
        while (true) {
            let c = 2 * i + 1;
            if (c >= fs) break;
            if (c + 1 < fs && f[c + 1] < f[c]) c++;
            if (f[c] >= x) break;
            f[i] = f[c];
            i = c;
        }
        f[i] = x;
        res[j] = s[r] % 262144;
        const y = (t + tasks[j]) * n + r;
        i = bs++;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (b[p] <= y) break;
            b[i] = b[p];
            i = p;
        }
        b[i] = y;
    }
    return res;
};

console.log(assignTasks([3,3,2], [1,2,3,2,1,2]));