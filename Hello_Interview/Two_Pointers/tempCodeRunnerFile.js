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