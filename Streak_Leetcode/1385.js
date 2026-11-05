// Problem: Find the Distance Value Between Two Arrays
// Time: O(n log m)
// Space: O(1)
// Solution: Binary Search

var findTheDistanceValue = function(arr1, arr2, d) {
    let cnt = 0;
    for (let i = 0; i < arr1.length; i ++) {
        let j = 0;
        while (j < arr2.length) {
            let absDiff = Math.abs(arr1[i] - arr2[j])
            if (absDiff <= d) {
                break
            }
            else {
                j ++;
            }
        }
        if (j === arr2.length) cnt ++;
    }

    return cnt;
};



var findTheDistanceValue = function(arr1, arr2, d) {
    let cnt = 0;
    arr2.sort((a,b) => a - b);
    
    for (const n of arr1) {
        let left = 0;
        let right = arr2.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (arr2[mid] < n - d) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === arr2.length || arr2[left] > n + d) {
            cnt++;
        }
    }
    return cnt;
};

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2));