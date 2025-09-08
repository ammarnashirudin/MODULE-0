// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number
console.log("Write a code to check whether the number is odd or even");
let number = 6;
console.log("Number :", number);
number %=2;
if (number == 0) {
    console.log("Genap")}
else {
    console.log("Ganjil")
}


// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
console.log("Write a code to check whether the number is prime number or not");
let number1 = 9;
if (number1 <= 1) {
  console.log("bukan bilangan prima");
} else{
  for (let i = 2; i < number1 ; i++) {
    console.log(i);
    if (number1 % i === 0) {
      console.log("bukan bilangan prima");
      break;
    }
  }
}

// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6
console.log("Write a code to find the sum of the numbers 1 to N");
let number3 = 5;
let number4 = number3*(number3+1)/2
console.log("number :",number4);

// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

console.log("Write a code to find factorial of a number");
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(6)); 


// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
console.log("Write a code to print the first N fibonacci numbers");
function printFibonacci(n) {
  let a = 0, b = 1;
  
  for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

console.log( printFibonacci(15));
