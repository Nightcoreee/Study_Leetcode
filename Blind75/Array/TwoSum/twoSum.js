// Cách 1 O(n^2)
var twoSum_BF = function(numbers, target) {
    for (let i=0; i<numbers.length; i++){
        for (let j=i+1; j<numbers.length; j++){
            if (numbers[i] + numbers[j] === target){
                return [i, j];
            } 
        }
    }
    return "Not found numbers equal target";
}
console.log(twoSum_BF([7,2,11,15], 10));

//Cách 2 O(n)
var twoSum_HM = function(numbers, target) {
    let map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        let need = target - numbers[i];

        if (map.has(need)) {
            return [map.get(need), i];
        }
        map.set(numbers[i], i);
    }
    return "Not found numbers equal target";
}
console.log(twoSum_HM([7,2,11,15], 10));


