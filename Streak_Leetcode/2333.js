//Time: O(n + k)
//Solution: Greedy
//Problem: Minimum Sum of Squared Difference
var minSumSquareDiff = function (nums1, nums2, k1, k2) {
  let k = k1 + k2;
  const n = nums1.length;

  let maxD = 0;
  const diffs = new Array(n);
  for (let i = 0; i < n; i++) {
    diffs[i] = Math.abs(nums1[i] - nums2[i]);
    if (diffs[i] > maxD) {
      maxD = diffs[i];
    }
  }
  
  const cnt = new Array(maxD + 1).fill(0);
  for (const d of diffs) {
    cnt[d]++;
  }

  for (let v = maxD; v >= 1 && k > 0; v--) {
    if (cnt[v] === 0) {
       continue;
    }
    if (k >= cnt[v]) {
      k -= cnt[v];
      cnt[v - 1] += cnt[v];
      cnt[v] = 0;
    } else {
      cnt[v - 1] += k;
      cnt[v] -= k;
      k = 0;
    }
  }

  let result = 0;
  for (let v = 1; v <= maxD; v++) {
    result += cnt[v] * v * v;
  }
  return result;
};

console.log(minSumSquareDiff([1,4,10,12], [5,8,6,9], 1, 1));