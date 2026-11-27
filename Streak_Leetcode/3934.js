// Problem: Smallest Unique Subarray
// Time: O(n)
// Space: O(n)

var smallestUniqueSubarray = function (nums) {
    const n = nums.length;
    const base = 100003;

    const prefix = new Int32Array(n + 1);
    const power = new Int32Array(n + 1);

    power[0] = 1;

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = Math.imul(prefix[i], base) + nums[i];
        power[i + 1] = Math.imul(power[i], base);
    }

    const check = (len) => {
        const map = new Map();
        const p = power[len];

        for (let i = len; i <= n; i++) {
            const hash = (prefix[i] - Math.imul(prefix[i - len], p)) | 0;
            map.set(hash, !map.has(hash));
        }

        for (const unique of map.values()) {
            if (unique) return true;
        }

        return false;
    };

    if (check(1)) return 1;
    let low = 2, high = n;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (check(mid)) high = mid;
        else low = mid + 1;
    }
    return low;
};

// Other solution
var smallestUniqueSubarray = function (nums) {
    const n = nums.length;
    const MOD = (1n << 61n) - 1n;
    const base = BigInt(Math.floor(Math.random() * 1e9)) + 1000003n;

    const h = new Array(n + 1).fill(0n);
    const p = new Array(n + 1).fill(1n);
    for (let i = 0; i < n; i++) {
        h[i + 1] = (h[i] * base + BigInt(nums[i])) % MOD;
        p[i + 1] = (p[i] * base) % MOD;
    }

    const hasUnique = (L) => {
        const cnt = new Map();
        for (let i = 0; i + L <= n; i++) {
            const v = (((h[i + L] - h[i] * p[L]) % MOD) + MOD) % MOD;
            cnt.set(v, (cnt.get(v) || 0) + 1);
        }
        for (const c of cnt.values()) {
            if (c === 1) return true;
        }
        return false;
    };

    let lo = 1,
        hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (hasUnique(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};

console.log(smallestUniqueSubarray([2,1,2,3,3]));