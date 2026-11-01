// Problem: Shortest Path With At Most K Consecutive Identical Characters
// Time: O(nlogn)
// Space: O(n)
// Solution: Dijkstra
class MinHeapp {
    constructor() { this.a = []; }
    size() { return this.a.length; }
    push(x) {
        const a = this.a;
        a.push(x);
        let i = a.length - 1;
        while (i > 0) {
        const p = (i - 1) >> 1;
        if (a[p][0] <= a[i][0]) break;
        [a[p], a[i]] = [a[i], a[p]];
        i = p;
    }
  }
  pop() {
    const a = this.a;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      const n = a.length;
      while (true) {
        let l = 2 * i + 1, r = l + 1, m = i;
        if (l < n && a[l][0] < a[m][0]) m = l;
        if (r < n && a[r][0] < a[m][0]) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]];
        i = m;
      }
    }
    return top;
  }
}

var shortestPath = function (n, edges, labels, k) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) adj[u].push([v, w]);

    const W = k + 1; 
    const dist = new Array(n * W).fill(Infinity);
    dist[0 * W + 1] = 0;

    const heap = new MinHeapp();
    heap.push([0, 0, 1]); 

    while (heap.size()) {
        const [d, u, s] = heap.pop();
        if (d > dist[u * W + s]) continue; 
        if (u === n - 1) return d;        

        for (const [v, w] of adj[u]) {
        const ns = labels[v] === labels[u] ? s + 1 : 1;
        if (ns > k) continue;
        const nd = d + w;
        if (nd < dist[v * W + ns]) {
            dist[v * W + ns] = nd;
            heap.push([nd, v, ns]);
        }
        }
    }
    return -1;
};

console.log(shortestPath(3, [[0,1,1],[1,2,1],[0,2,3]], "aab", 1));