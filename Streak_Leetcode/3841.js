// Problem: Palindromic Path Queries in a Tree
// Time: O(n^2)
// Solution: DFS

// Cây vô hướng có các yếu tố sau:
// Liên thông
// Không có chu trình
// Có N đỉnh bằng N -1 cạnh


var palindromePath = function(n, edges, s, queries) {
    const bit = (ch) => 1 << (ch.charCodeAt(0) - 97);

    const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

    let LOG = 1;
    while (1 << LOG < n) LOG++;
    const up = Array.from({ length: LOG + 1 }, () => new Int32Array(n));
    const depth = new Int32Array(n);
    const tin = new Int32Array(n);
    const tout = new Int32Array(n);
    const base = new Int32Array(n); 
    const cur = s.split(""); 

    const idx = new Int32Array(n);

    let timer = 1; 
    const stack = [0];
    tin[0] = timer++;
    base[0] = bit(cur[0]);
    while (stack.length) {
        const u = stack[stack.length - 1];
        if (idx[u] < adj[u].length) {
            const v = adj[u][idx[u]++];
            if (v === up[0][u]) continue; 
            up[0][v] = u;
            depth[v] = depth[u] + 1;
            base[v] = base[u] ^ bit(cur[v]);
            tin[v] = timer++;
            stack.push(v);
        } else {
        tout[u] = timer - 1;
        stack.pop();
        }
    }

    for (let k = 1; k <= LOG; k++) {
        for (let x = 0; x < n; x++) {
        up[k][x] = up[k - 1][up[k - 1][x]];
        }
    }

    const lca = (a, b) => {
        if (depth[a] < depth[b]) [a, b] = [b, a];
        let diff = depth[a] - depth[b];
        for (let k = 0; diff; k++, diff >>= 1) {
            if (diff & 1) a = up[k][a];
        }
        if (a === b) return a;
        for (let k = LOG; k >= 0; k--) {
        if (up[k][a] !== up[k][b]) {
            a = up[k][a];
            b = up[k][b];
        }
        }
        return up[0][a];
    };

    const tree = new Int32Array(n + 2);
    const add = (i, v) => {
        for (; i <= n + 1; i += i & -i) tree[i] ^= v;
    };
    const prefixXor = (i) => {
        let r = 0;
        for (; i > 0; i -= i & -i) r ^= tree[i];
        return r;
    };
    const pref = (x) => base[x] ^ prefixXor(tin[x]); 

    const ans = [];
    for (const q of queries) {
        const parts = q.split(" ");
        if (parts[0] === "update") {
            const u = +parts[1];
            const c = parts[2];
        if (cur[u] === c) continue;
        const delta = bit(cur[u]) ^ bit(c);
        add(tin[u], delta);
        add(tout[u] + 1, delta);
        cur[u] = c;
        } else {
        const u = +parts[1];
        const v = +parts[2];
        const l = lca(u, v);
        const mask = pref(u) ^ pref(v) ^ bit(cur[l]);
        ans.push((mask & (mask - 1)) === 0); 
        }
    }
    return ans; 
};

console.log(palindromePath(3, [[0,1], [1,2]], "aac", ["query 0 2", "update 1 b", "query 0 2"]));