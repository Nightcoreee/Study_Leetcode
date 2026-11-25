// Problem: Product of the Last K Numbers
// Time: O(1)
// Space: O(n)

class ProductOfNumbers {
  constructor() {
    this.prefix = [1];
  }

  add(num) {
    if (num === 0) {
      this.prefix = [1]; // reset khi gặp 0
    } else {
      const last = this.prefix[this.prefix.length - 1];
      this.prefix.push(last * num);
    }
  }

  getProduct(k) {
    const n = this.prefix.length;
    if (k >= n) return 0; // k số cuối có chứa số 0
    return this.prefix[n - 1] / this.prefix[n - 1 - k];
  }
}


// Other solution
var ProductOfNumbers = function() {
    this.prefix = [1];
};

ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.prefix = [1];
        return;
    }

    const last =
        this.prefix[this.prefix.length - 1];

    this.prefix.push(last * num);
};

ProductOfNumbers.prototype.getProduct = function(k) {
    if (k >= this.prefix.length) {
        return 0;
    }

    const lastIndex =
        this.prefix.length - 1;
    return (
        this.prefix[lastIndex] / this.prefix[lastIndex - k]
    );
};


// Test
const commands = ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"];
const args = [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]];

let obj;
const output = [];

for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    const arg = args[i];

    if (cmd === "ProductOfNumbers") {
        obj = new ProductOfNumbers();
        output.push(null);
    } else {
        output.push(obj[cmd](...arg) ?? null);
    }
}

console.log(output);