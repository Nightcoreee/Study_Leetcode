//O(n^2) time
//Solution: Brute Force
function ProdOfArrayExceptSelf_BF(nums: number[]): number[] {
    const n = nums.length;
    const res = new Array(n);
    for (let i=0; i<n; i++) {
        let prod = 1;
        for (let j=0; j<n; j++) {
            if (i !== j) {
                prod *= nums[j];
            }
        }
        res[i] = prod;
    }
    return res;
}

console.log(ProdOfArrayExceptSelf_BF([1,2,3,4]));


//O(n) 
//Solution: Prefix and Suffix Product
function ProdOfArrayExceptSelf_PrefixSuffix(nums: number[]): number[] {
    let n = nums.length; 
    const pref = new Array(n);
    const suff = new Array(n);
    const res = new Array(n);

    pref[0] = 1;
    suff[n-1] = 1;

    for (let i=1; i<n; i++) {
        //nums[0] tăng dần
        pref[i] = nums[i-1] * pref[i-1];
    }

    for (let i=n-2; i>=0; i--) {
        //nums[3] giảm dần
        suff[i] = nums[i+1] * suff[i+1];
    }

    for (let i=0; i<n; i++) {
        res[i] = pref[i] * suff[i];
    }

    return res;
}

console.log(ProdOfArrayExceptSelf_PrefixSuffix([1,2,3,4]));

//O(n)
//Solution: Optimized Prefix and Suffix Optimal
function ProdOfArrayExceptSelf_Optimal(nums: number[]): number[] {
    let n = nums.length;
    const res = new Array(n).fill(1);

    for (let i=1; i<n; i++) {
        res[i] = nums[i-1] * res[i-1];
    }

    let postfix = 1;
    for (let i=n-1; i>=0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
}

console.log(ProdOfArrayExceptSelf_Optimal([1,2,3,4]));

