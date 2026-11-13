// Problem: Count Non-Decreasing Subarrays After K Operations
// Time: O(n)
// Space: O(n)


var countNonDecreasingSubarrays = function(nums, k) {
    const n = nums.length;
    const val = new Array(2 * n + 2), cntArr = new Array(2 * n + 2);
    let head = n + 1, tail = n + 1; 
    let cost = 0, r = n - 1, ans = 0;

    for (let l = n - 1; l >= 0; l--) {
        const v = nums[l];
        let cnt = 1;
        while (head < tail && val[head] <= v) {
        cost += (v - val[head]) * cntArr[head];
        cnt += cntArr[head];
        head++;
        }
        head--;
        val[head] = v;
        cntArr[head] = cnt;

        while (cost > k) {
        cost -= val[tail - 1] - nums[r];
        if (--cntArr[tail - 1] === 0) tail--;
        r--;
        }
        ans += r - l + 1;
    }
    return ans;
};


// Other solution
var countNonDecreasingSubarrays = function(nums, k) {
    let ans = 0;
    let cost = 0;
    let dq = []; 
    let j = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; --i) {
        const num = nums[i];

        while (dq.length > 0 && nums[dq[dq.length - 1]] < num) {
            const l = dq.pop();
            const r = dq.length === 0 ? j + 1 : dq[dq.length - 1];
            cost += (r - l) * (num - nums[l]);
        }
        dq.push(i);

        while (cost > k) {
            cost -= nums[dq[0]] - nums[j];
            if (dq[0] === j) {
                dq.shift();
            }
            --j;
        }

        ans += j - i + 1;
    }

    return ans;
};


// Other solution
var countNonDecreasingSubarrays = function(nums, k) {
    const n = nums.length;
    const dq = new Int32Array(n);
    let head = 0, tail = 0;
    let cost = 0, ans = 0;
    let j = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        while (tail > head && nums[dq[tail - 1]] < nums[i]) {
            const left = dq[--tail];
            const right = tail > head ? dq[tail - 1] : j + 1;
            cost += (right - left) * (nums[i] - nums[left]);
        }

        dq[tail++] = i;

        while (cost > k) {
            cost -= nums[dq[head]] - nums[j];
            if (dq[head] === j) {
                head++;
            }
            j--;
        }

        ans += j - i + 1;
    }

    return ans;
};

console.log(countNonDecreasingSubarrays([6,3,1,3,6], 4));