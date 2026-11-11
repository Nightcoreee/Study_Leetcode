// Problem: Find the Distance Value Between Two Arrays
// Time: O(n log m)
// Space: O(1)


var findTheDistanceValue = function(arr1, arr2, d) {
    let cnt = 0;
    for (let i = 0; i < arr1.length; i ++) {
        let j = 0;
        while (j < arr2.length) {
            let absDiff = Math.abs(arr1[i] - arr2[j])
            if (absDiff <= d) {
                break;
            }
            else {
                j ++;
            }
        }
        if (j === arr2.length) cnt ++;
    }

    return cnt;
};


// Solution: Binary Search
var findTheDistanceValue = function(arr1, arr2, d) {
    let cnt = 0;
    arr2.sort((a,b) => a - b);
    
    for (const n of arr1) {
        let low = 0;
        let high = arr2.length;
        while (low < high) {
            const mid = (low + high) >> 1;
            // Các phần tử bên trái
            if (arr2[mid] < n - d) {
                low = mid + 1;

            // Các phần tử bên phải
            } else {
                high = mid;
            }
        }
        if (low === arr2.length || arr2[low] > n + d) {
            cnt++;
        }
    }
    return cnt; 
};

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2));