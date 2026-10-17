// Problem: Minimum Swaps to Sort by Digit Sum
// Solution: 

function minSwaps(nums) {
  const digitSum = (x) => {
    let s = 0;
    while (x > 0) {
      s += x % 10;
      x = Math.floor(x / 10);
    }
    return s;
  };

  const n = nums.length;

  // idx[j] = chỉ số gốc của phần tử phải đứng ở vị trí j sau khi sắp xếp
  const idx = Array.from({ length: n }, (_, i) => i);
  idx.sort((a, b) => digitSum(nums[a]) - digitSum(nums[b]) || nums[a] - nums[b]);

  // Đếm số chu trình của hoán vị idx
  const visited = new Array(n).fill(false);
  let cycles = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    cycles++;
    let j = i;
    while (!visited[j]) {
      visited[j] = true;
      j = idx[j];
    }
  }

  // Mỗi chu trình độ dài k cần k - 1 lần swap, tổng = n - số chu trình
  return n - cycles;
}

console.log(minSwaps([37, 100]));