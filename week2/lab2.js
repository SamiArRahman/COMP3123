

//  Exercise 1: 
const nums = [1, 2, 3];
const double = (arr) => {
  for (const n of arr) {
    console.log(`Value is ${n * 2}`);
  }
};
console.log("Ex1 (double each):");
double(nums);

//  Exercise 2:
const capitalize = (str = "") => {
  if (!str) return str;
  const [first, ...rest] = [...str];
  return `${(first ?? "").toUpperCase()}${rest.join("")}`;
};
console.log("Ex2 (capitalize):", capitalize("magenta"));

// Exercise 3:
const colors = ["red", "green", "blue", "magenta"];
const capitalizedColors = colors.map(capitalize);
console.log("Ex3 (capitalized colors):", capitalizedColors);

// Exercise 4:
const filterTwentyOrMore = (arr = []) => arr.filter((n) => n >= 20);
console.log(
  "Ex4 (>=20):",
  filterTwentyOrMore([3, 19, 20, 21, 5, 42])
);

// Exercise 5:
const sum = (arr = []) => arr.reduce((acc, n) => acc + n, 0);
const product = (arr = []) => arr.reduce((acc, n) => acc * n, 1);
const sumAndProduct = (arr = []) =>
  arr.reduce(
    (acc, n) => ({ sum: acc.sum + n, product: acc.product * n }),
    { sum: 0, product: 1 }
  );

const sample = [1, 2, 3, 4];
console.log("Ex5 (sum):", sum(sample)); 
console.log("Ex5 (product):", product(sample)); 
console.log("Ex5 (both):", sumAndProduct(sample));

// Exercise 6: 
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  info() {
    return `${this.model} (${this.year})`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
  info() {
    return `${super.info()} • Balance: $${this.balance}`;
  }
}

const civic = new Sedan("Civic", 2022, 15000);
console.log("Ex6 (class demo):", civic.info());
