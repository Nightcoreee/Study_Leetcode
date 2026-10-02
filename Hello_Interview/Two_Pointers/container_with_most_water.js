//O(n^2)
//Solution: Brute Force
var maxArea_BR = function(height) {
    let res = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            res = Math.max(res, Math.min(height[i], height[j]) * (j - i));
        }
    }
    return res;
}

console.log(maxArea_BR(height = [2,2,4,5]));

//O(n)
//Solution: Two Pointers
var maxArea_TP = function(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;


    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        res = Math.max(res, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return res;
}

console.log(maxArea_TP(height = [1,7,2,5,4,7,3,6]));