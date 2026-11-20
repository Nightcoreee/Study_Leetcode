// Problem: Calculate Digit Sum of a String
// Time: O(n^2)
// Space: O(n)

var digitSum = function(s, k) {
    while (s.length > k) {
        let nextS = "";
        for (let i = 0; i < s.length; i += k) {
            let sum = 0;
            for (let j = i; j < i + k && j < s.length; j++) {
                //sum += s[j] - '0'; 
                sum += +s[j];
            }
            nextS += sum;
        }
        s = nextS;
    }
    return s;
};

console.log(digitSum("11111222223", 3));