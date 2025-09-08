// Create a function that can create a triangle pattern according to the height we provide
console.log("Create a function that can create a triangle pattern according to the height we provide");
function triangle(n) {
  let count = 1;
  let message = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      message += count > 9 ? `${count} ` : `0${count} `;
      count++;
    }
    message += i == n ? "" : "\n";
  }

  return message;
}

console.log(triangle(10));

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
console.log("Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with (Fizz), multiples of 5 with (Buzz), multiples of 3 and 5 with (FizzBuzz.");
function multipleNumber(input){
  let result =[];
  for (let i = 1 ; i <= input ; i++){
    if (i%3 === 0){
      result.push("Fizz");
    } else if (i%5 === 0){
      result.push("Buzz");
    } else if (i%15 === 0){
      result.push("FizzBuzz");
    } else {result.push(i);}
  }
  return result;
}

console.log(multipleNumber(30));

// Create a function to calculate Body Mass Index (BMI)
console.log("Create a function to calculate Body Mass Index (BMI)");
function BMI (weight , height) {
  let result = [];
  let BMI = weight/height**2;
  if (BMI < 18.5) { 
    result.push("less weight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    result.push("ideal");
  } else if (BMI >= 25 && BMI <= 29.9) {
    result.push("overweight");
  } else if (BMI >= 30 && BMI <= 39.9) {
    result.push("very overweight");
  } else if(BMI>39.9) {
    result.push("obesity");
  }
  return result;
}
console.log(BMI(60,1.68));

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
console.log("Write a function to remove all odd numbers in an array and return a new array that contains even numbers only");
function odd(input){
  let result = []
  for (let i = 1 ; i <= input ; i++) {
  if (i%2 === 0){
    result.push(i);}
  }
    return result;
}
console.log(odd(10));

// Write a function to split a string and convert it into an array of words
console.log("Write a function to split a string and convert it into an array of words");
function split(input){
  let sentence = input.split(" ");
  return sentence;
}
console.log(split("Belajar Java Script Bersama Purwadhika"));





