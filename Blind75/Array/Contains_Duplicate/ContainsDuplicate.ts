//O(n^2)
//Solution: Brute Force
function ContainsDuplicate_BF(nums: number[]): boolean {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(ContainsDuplicate_BF([1,2,3,1]));


//O(n)
//Solution: Sorting
function ContainsDuplicate_Sort(nums: number[]): boolean {
    nums.sort();
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true;
        }
    }
    return false;
}

console.log(ContainsDuplicate_Sort([1,2,3,1]));


//O(n)
//Solution: Set
function ContainsDuplicate_Set(nums: number[]): boolean {
    const set = new Set();
    for (const num of nums) {
        if(set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

console.log(ContainsDuplicate_Set([1,2,3,1]));


//O(n)
//Solution: Hash Set Length
function ContainsDuplicate_HashSetLength(nums: number[]): boolean {
    return new Set(nums).size < nums.length;
}

console.log(ContainsDuplicate_HashSetLength([1,2,3,1]));
