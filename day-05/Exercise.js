// PAGE 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// 1
console.log("Write a function to get the lowest, highest and average value in the array (with and without sort function).");

function getStats(arr) {
  if (arr.length === 0) return null; 

  let lowest = arr[0];
  let highest = arr[0];
  let sum = 0;

  for (let num of arr) {
    if (num < lowest) lowest = num;
    if (num > highest) highest = num;
    sum += num;
  }

  let average = sum / arr.length;
  return { lowest, highest, average };
}

console.log(getStats([5, 10, 2, 8, 20]));

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// 2
console.log("Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.");

function gabungan (arr){
  return arr.join(" ")
}
let kata = ["Saya", "sedang", "belajar", "JavaScript"]
console.log(gabungan(kata));

// Write a function from a given array of numbers and return the second smallest number
// 3
console.log("Write a function from a given array of numbers and return the second smallest number");
function secondSmallest(arr) {
  arr.sort((a, b) => a - b);

  if (arr.length < 2) {
    return null;
  }

  return arr[1]; 
}

console.log(secondSmallest([5, 2, 8, 1, 3])); 

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// 4
console.log("Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.");
function sumArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}
let x= [1,3,5,6];
let y= [2,5,7,3];
console.log(sumArrays(x, y));


// PAGE 2
// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array
// 1
console.log("Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array");
function addUnique(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
}

let numbers = [1, 2, 3];
console.log(addUnique(numbers, 4)); 

// Write a function from a given array of mixed data types and return the sum of all the number
// 2
console.log("Write a function from a given array of mixed data types and return the sum of all the number");
function SummOfNumber(arr){
  let sum = 0;
  for (let item of arr){
    if (typeof item === "number" && !isNaN(item)){
      sum += item
    };
  }
  return sum;
}
console.log(SummOfNumber(["3", 1, "string", null, false, undefined, 2]));

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The 
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the 
// array can only contain 5 elements)
// 3
console.log("Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements)");
function LimitArray (maxx){
  let arr = [];
  return function insert (...num){
    for (let nums of num ){
      if (arr.length < maxx){
        arr.push(nums);
      } else {
        console.log("Arr is Full, Cannot Insert");
      }
    }
    return arr
  }
}
const limit = LimitArray (5);
console.log(limit([5, 10, 24, 3, 6]));

// PAGE 3
// Write a function that will combine 2 given array into one array
// 1
function CombineArray (arr1, arr2){
  return arr1.concat(arr2);
}
let arr1 = [1,2,3,4];
let arr2 = [2,3,4,6];
console.log(CombineArray(arr1,arr2));

// Write a function to find duplicate values in an array
// 2
console.log("Write a function to find duplicate values in an array");
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
let arr = [1,1,2,2,3,5,6,8,3,]
console.log(findDuplicates(arr));

// Write a function to find the difference in 2 given array
// 3
console.log("Write a function to find the difference in 2 given array");
function differenceArr(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];
console.log(differenceArr(a, b)); 

// PAGE 3

// 1

// console.log(typeof 1);
// console.log(typeof "");
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof {});

function primitiveOnly(arr) {
  const result = [];
  for (const val of arr) {
    if (typeof val !== "object" || val === null) {
      result.push(val);
    }
  }

  return result;
}

console.log(
  primitiveOnly([1, {}, [], true, "halo", "message", 5, false, undefined, null])
);

// 2

function sumDuplicate(arr) {
  let sum = 0;
  const dup = [];
  // [10, 20]

  for (let i = 0; i < arr.length; i++) {
    if (dup.includes(arr[i])) continue;

    let count = 0;
    // arr[i] = 10
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    if (count > 1) {
      sum += arr[i] * count;
      dup.push(arr[i]);
    }
  }

  return sum;
}

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));

function rockPaperScissor(input) {
  input = input.toUpperCase();
  // 0 === BATU
  // 1 === KERTAS
  // 2 === GUNTING
  let option = ["ROCK", "PAPER", "SCISSOR"];
  const comp = option[Math.floor(Math.random() * 3)];

  if (!option.includes(input)) return "INVALID INPUT";

  let message = `You throw ${input}, Computer throw ${comp}, You `;

  if (input === comp) {
    message += "DRAW";
  } else if (
    (input === option[0] && comp === option[2]) ||
    (input === option[1] && comp === option[0]) ||
    (input === option[2] && comp === option[1])
  ) {
    message += "WIN";
  } else {
    message += "LOSE";
  }

  return message;
}

console.log(rockPaperScissor("SCISSOR"));