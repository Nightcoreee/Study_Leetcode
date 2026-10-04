var valid_triangle_number_TP = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;

    for(let i = nums.length - 1; i >= 2; i--) {
        let l = 0;
        let r = i - 1;
        if(nums[l] + nums[r] > nums[i]) {
            count += r - l;
            r--;
        } else {
            l++;
        }
    }
    return count;
}

console.log(valid_triangle_number_TP([11,4,9,6,15,18]));