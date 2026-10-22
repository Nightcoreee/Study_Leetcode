// Problem: Minimum Operations to Sort a String
// Time: O(n)
// Solution: Greedy

var minOperations = function(s) {
const n = s.length;
  let sorted = true;
  for (let i = 0; i + 1 < n; i++) {
    if (s[i] > s[i + 1]) { 
        sorted = false; 
        break; 
    }
  }
  if (sorted) {
    return 0;
  }
  if (n === 2) {
    return -1;
  }

  let mn = s[0], mx = s[0];
  for (const c of s) {
    if (c < mn) {
        mn = c;
    }
    if (c > mx) {
        mx = c;
    }
  }
  if (s[0] === mn || s[n - 1] === mx) {
    return 1;
  }
  if (!s.slice(0, n - 1).includes(mn) && !s.slice(1).includes(mx)) {
    return 3;
  }
  return 2;
};

console.log(minOperations("dog"));