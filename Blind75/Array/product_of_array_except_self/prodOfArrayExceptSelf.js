//O(n^2) time 
//Solution: Brute Force
var prodOfArrayExceptSelf_BF = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    for (let i=0; i<n; i++) {
        let prod = 1;
        for (let j=0; j<n; j++) {
            if (i !== j) {
                prod *= nums[j];
            }
        }
        result[i] = prod;
    }
    return result;
}

console.log(prodOfArrayExceptSelf_BF([1,2,3,4]));


//O(n) time
//Solution: Prefix and Suffix Product
var prodOfArrayExceptSelf_PS = function(nums) {
    let n = nums.length;
    const pref = new Array(n);
    const suff = new Array(n);
    const res = new Array(n);
    
    pref[0] = 1;
    suff[n-1] = 1;
    
    //Tích các phần tử bên trái của i
    for (let i=1; i<n; i++) {
        pref[i] = nums[i-1] * pref[i-1];
    }

    //Tích các phần tử bên phải của i
    for (let i=n-2; i>=0; i--) {
        suff[i] = nums[i+1] * suff[i+1];
    }

    //Kết quả là tích của prefix và suffix
    for (let i=0; i<n; i++) {
        res[i] = pref[i] * suff[i];
    }

    return res;
}

console.log(prodOfArrayExceptSelf_PS([1,2,3,4]));

//O(n) time 
//Solution: Prefix and Suffix Product Optimal
var prodOfArrayExceptSelf_Opt = function(nums) {
    let n = nums.length;
    const res =  new Array(n).fill(1);

    for (let i=1; i<n; i++) {
        res[i] = res[i-1] * nums[i-1];
    }   

    let postfix = 1;
    for (let i=n-1; i>=0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res; 
}

console.log(prodOfArrayExceptSelf_Opt([1,2,3,4]));