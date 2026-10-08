//O(n)
//Solution: Two Pointers
var trapping_rain_water_TP = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let totalWater = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
        } else {
            right--;
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
        }
    }
    return totalWater;
}

console.log(trapping_rain_water_TP([3, 4, 1, 2, 2, 5, 1, 0, 2]));