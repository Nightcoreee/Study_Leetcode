// Problem: Maximum Subarray With Equal Products
// Time: O(n^2)
// Space: O(n^2)


function gcd(a, b) {
    while(b) {
        [a, b] = [b, a % b];
    }
    return a;
}

var maxLength = function(nums) {
    let max_len = 0;
    for (let i = 0; i < nums.length; i++) {
        let prod = 1, g = 0, l = 1;
        for (let j = i; j < nums.length; j++) {
            const x = nums[j];
            g = gcd(g, x);
            l = (l * x) / gcd(l, x);
            prod *= x;

            if (prod > 25200) break;
            if (prod === l * g) {
                max_len = Math.max(max_len, j - i + 1);
            }
        }
    }
    return max_len;
};

console.log(maxLength([1,2,1,2,1,1,1]));