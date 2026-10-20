// Problem: Sum of Sortable Integers
// Time: O(n)
// Solution: Greedy

var sortableIntegers = function(nums) {
    const n = nums.length;
    let ans = 0;

    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) {
            continue;
        }

        let prevMax = 0; 
        let ok = true;

        for (let s = 0; s < n; s += k) {
            let cnt = 0;
            let pos = -1;

            for (let j = s; j < s + k - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    cnt++;
                    pos = j;
                    if (cnt > 1) break;
                }
            }

            if (cnt > 1) {
                ok = false;
                break;
            }

            let lo, hi;
            if (cnt === 0) {
                lo = nums[s];
                hi = nums[s + k - 1];
            } else {
                if (nums[s + k - 1] > nums[s]) {
                    ok = false;
                    break;
                }
                lo = nums[pos + 1];
                hi = nums[pos];
            }

            if (lo < prevMax) {
                ok = false;
                break;
            }
            prevMax = hi;
        }
        if (ok) ans += k;
    }
    return ans;
}

console.log(sortableIntegers([3,1,2]));