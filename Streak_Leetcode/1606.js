// Problem: Find Servers That Handled Most Number of Requests
// Time: O(n log n + m log n)
// Space: O(n + m)
// Solution: Min Heap   

class MyHeap {
    constructor(cmp) { this.a = []; this.cmp = cmp; }
    get size() { return this.a.length; }
    peek() { return this.a[0]; }
    push(x) {
        const a = this.a; a.push(x);
        let i = a.length - 1;
        while (i > 0) {
        const p = (i - 1) >> 1;
        if (this.cmp(a[i], a[p]) < 0) { [a[i], a[p]] = [a[p], a[i]]; i = p; } else break;
        }
    }
    pop() {
        const a = this.a, top = a[0], last = a.pop();
        if (a.length) {
        a[0] = last;
        let i = 0;
        for (;;) {
            let l = 2 * i + 1, r = l + 1, m = i;
            if (l < a.length && this.cmp(a[l], a[m]) < 0) m = l;
            if (r < a.length && this.cmp(a[r], a[m]) < 0) m = r;
            if (m === i) break;
            [a[i], a[m]] = [a[m], a[i]]; i = m;
        }
        }
        return top;
    }
}

var busiestServers = function (k, arrival, load) {
    const free = new MyHeap((x, y) => x - y);
    for (let s = 0; s < k; s++) free.push(s);
    const busy = new MyHeap((x, y) => x[0] - y[0]);
    const count = new Array(k).fill(0);

    for (let i = 0; i < arrival.length; i++) {
        const a = arrival[i], l = load[i];
        while (busy.size && busy.peek()[0] <= a) {
        const [, j] = busy.pop();
        free.push(i + ((((j - i) % k) + k) % k));
        }
        while (free.size) {
        const j = free.pop();
        if (j < i) {
            free.push(j + Math.ceil((i - j) / k) * k);
            continue;
        }
        count[j % k]++;
        busy.push([a + l, j]);
        break;
        }
    }
    let mx = 0;
    for (const c of count) if (c > mx) mx = c;
    const res = [];
    for (let s = 0; s < k; s++) if (count[s] === mx) res.push(s);
    return res;
};

console.log(busiestServers(3, [1,2,3,4,5], [5,2,3,3,3]));