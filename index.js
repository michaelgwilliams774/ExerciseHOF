const multiplyBy = function(num1) {
  return function(num2) {
    return num1 * num2
  }
}
// We can write above multiplyBy() using arrow function
// const multiplyBy = (num1) => (num2) => num1 * num2

const multiplyByTwo = multiplyBy(2)
const multiplyByTen = multiplyBy(10)

console.log(multiplyByTwo(4))
console.log(multiplyByTwo(5))

console.log(multiplyByTen(4))
console.log(multiplyByTen(5))