// Problme: Minimum Changes to Make K Semi-palindromes
// Time: O(n^3)
// Space: O(n^2)

var minimumChanges = function (s, k) {
    const n = s.length;
    const INF = Infinity;

    const divisors = Array.from({ length: n + 1 }, () => []);
    for (let L = 2; L <= n; L++) {
        for (let d = 1; d < L; d++) {
        if (L % d === 0) {
            divisors[L].push(d);
            } 
        }
    }

    const cost = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const L = j - i + 1;
            let best = INF;
            for (const d of divisors[L]) {
                const m = L / d;
                let changes = 0;
                for (let r = 0; r < d; r++) {
                    for (let t = 0; t < Math.floor(m / 2); t++) {
                        const a = i + r + t * d;
                        const b = i + r + (m - 1 - t) * d;
                        if (s[a] !== s[b]) { 
                            changes++; 
                        }
                    }
                }
                best = Math.min(best, changes);
            }
        cost[i][j] = best;
        }
    }

    const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(INF));
    dp[0][0] = 0;
    for (let p = 1; p <= k; p++) {
        for (let i = 2 * p; i <= n; i++) {
            for (let j = 2 * (p - 1); j < i - 1; j++) {
                    if (dp[p - 1][j] < INF) {
                        dp[p][i] = Math.min(dp[p][i], dp[p - 1][j] + cost[j][i - 1]);
                }   
            }
        }
    }

    return dp[k][n];
};

console.log(minimumChanges("abcba", 2));