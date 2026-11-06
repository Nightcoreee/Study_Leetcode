// Problem: Count Zero Request Servers
// Time: O(m log m + k)
// Space: O(n)
// Solution: Sliding Window + HashMap


var countServers = function(n, logs, x, queries) {
    const m = queries.length;
    const ans = new Array(m);

    const sortedQueries = queries
        .map((time, index) => ({ time, index}))
        .sort((a, b) => a.time - b.time);
    
    logs.sort((a, b) => a[1] - b[1]);

    const serverCnt = new Map();
    let activeServers = 0;

    let l = 0;
    let r = 0;

    for (let i = 0; i < m; i++) {
        const { time, index } = sortedQueries[i];
        const windowStart = time - x;
        const windowEnd = time;

        while (r < logs.length && logs[r][1] <= windowEnd) {
            const serverId = logs[r][0];
            const currentCnt = serverCnt.get(serverId) || 0;

            if (currentCnt === 0) {
                activeServers++;
            }
            serverCnt.set(serverId, currentCnt + 1);
            r++;
        }

        while (l < logs.length && logs[l][1] < windowStart) {
            const serverId = logs[l][0];
            const currentCnt = serverCnt.get(serverId) || 0;

            if (currentCnt === 1) {
                activeServers--;
            }
            if (currentCnt > 0) {
                serverCnt.set(serverId, currentCnt - 1);
            }
            l++;
        }
        ans[index] = n - activeServers;
    }
    return ans;

};


// Other solution
var countServers = function (n, logs, x, queries) {
    logs.sort((a, b) => a[1] - b[1]);

    const m = queries.length;
    const ids = Array.from({ length: m }, (_, i) => i);
    ids.sort((i, j) => queries[i] - queries[j]);

    const ans = new Array(m).fill(0);
    const cnt = new Array(n + 1).fill(0);
    let left = 0,
        right = 0,
        active = 0;

    for (const i of ids) {
        const q = queries[i];
        while (right < logs.length && logs[right][1] <= q) {
            const id = logs[right++][0];
            if (cnt[id]++ === 0) {
                ++active;
            }
        }
        while (left < right && logs[left][1] < q - x) {
            const id = logs[left++][0];
            if (--cnt[id] === 0) {
                --active;
            }
        }
        ans[i] = n - active;
    }
    return ans;
};

console.log(countServers(3, [[1,3],[2,6],[1,5]], 5, [10,11]));