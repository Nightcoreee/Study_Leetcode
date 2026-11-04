// Problem: Minimum Operations to Make a Subsequence
// Time: O(n log n)
// Space: O(n)
// Solution: Binary Indexed Tree

var minOperations = function(nums, x, k) {
    const n = nums.length;

    const val = [...new Set(nums)].sort((a,b) => a - b);
    const m = val.length;
    const idx = new Map(val.map((v,i) => [v, i+1]));

    const bitCnt = new Array(m + 1).fill(0);
    const bitSum = new Array(m + 1).fill(0);

    const update = (p, dc, dv) => {
        for(; p <= m; p += p & -p){
            bitCnt[p] += dc;
            bitSum[p] += dv;
        }
    };

    const query = (p) => {
        let c = 0, s = 0;
        for(; p > 0; p -= p & -p){
            c += bitCnt[p];
            s += bitSum[p];
        }
        return [c, s];
    };

    let LOG = 1;
    while (LOG * 2 <= m) {
        LOG *= 2;
    }

    const kthSmallest = (kth) => {
        let pos = 0;
        for(let pw = LOG; pw > 0; pw >>= 1) {
            if(pos + pw <= m && bitCnt[pos + pw] < kth) {
                pos += pw;
                kth -= bitCnt[pos];
            }
        }
        return pos + 1;
    };

    const windows = n - x + 1;
    const cost = new Array(windows).fill(0);
    let windowSum = 0;
    const medRank = (x + 1) >> 1;

    for(let i = 0; i < n; i++) {
        update(idx.get(nums[i]), 1, nums[i]);
        windowSum += nums[i];
    
        if(i >= x) {
            update(idx.get(nums[i - x]), -1, -nums[i - x]);
            windowSum -= nums[i - x];
        }

        if(i >= x - 1) {
            const p = kthSmallest(medRank);
            const med = val[p - 1];
            const [c, sumLE] = query(p);
            cost[i - x + 1] = med * c - sumLE + (windowSum - sumLE) - med * (x - c);
        }
    }

    let prev = new Array(n + 1).fill(0);
    for(let j = 1; j <= k; j++) {
        const cur = new Array(n + 1).fill(Infinity);
        for(let i = 1; i <= n; i++) {
            cur[i] = cur[i - 1];
            if(i >= x){
                cur[i] = Math.min(cur[i], prev[i - x] + cost[i - x]);
            }
        }
        prev = cur;
    }
    return prev[n];
};