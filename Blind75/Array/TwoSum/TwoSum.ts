//O(n^2) solution using brute force
function TwoSum_BF(nums: number[], target: number): number[] {
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }
    return [];
};
console.log(TwoSum_BF([7,2,11,15], 10));

//O(n) solution using HashMap
function TwoSumHashMap (nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    for (let i=0; i<nums.length; i++) {
        const need = target - nums[i];
        if (map.has(need)) {
            return [map.get(need)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}
console.log(TwoSumHashMap([7,2,11,15], 10));
