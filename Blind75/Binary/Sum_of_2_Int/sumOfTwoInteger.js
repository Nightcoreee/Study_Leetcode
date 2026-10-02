//O(1)
//Solution: Bit manipulation
var sumOfTwoIntegers = function(a, b) {
    let result = 0;
    let carry = 0;
    let mask = 0xffffffff;

    for(let i = 0; i < 32; i++) {
        let bitA = (a >> i) & 1;
        let bitB = (b >> i) & 1;
        let currentSum = bitA ^ bitB ^ carry;
        carry = bitA + bitB + carry >= 2 ? 1 : 0;
        if(currentSum) {
            result |= (1 << i);
        }
    }

    if(result > 0x7fffffff) {
        result = ~(result ^ mask);
    }
    return result;
}   

console.log(sumOfTwoIntegers(1, 2));


var sumOfTwoIntegers_Bit_Manipulation = function(a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}