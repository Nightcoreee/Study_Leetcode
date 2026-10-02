//O(n^2) time complexity
//Solution: Brute Force
var containsDuplicate_BF = function(nums) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate_BF([1,2,3,1])); 


//O(n) time complexity
//Solution: Sorting
var containsDuplicate_Sort = function(nums) {
    nums.sort();
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate_Sort([1,1,3,1,4,9,5,2]));


//O(n) time complexity
//Solution: HashSet
var containsDuplicate_HS = function(nums) {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
}
console.log(containsDuplicate_HS([1,1,3,1,4,9,5,2]));


//O(n) time complexity
//Solution: Hash Set Length
var containsDuplicate_HashSetLength = function(nums) {
    return new Set(nums).size < nums.length;
}

console.log(containsDuplicate_HashSetLength([1,1,3,1,4,9,5,2]));
