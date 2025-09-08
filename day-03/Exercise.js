// Write a code to display the multiplication table of a given integer
console.log("Write a code to display the multiplication table of a given integer"
);

let x = 9
let y = 10
for (let i = 1; i <= y; i++) {
console.log(`${x} x ${i} = ${x*i}`);
}


//Write a code to check whether a string is a palindrome or not
console.log("Write a code to check whether a string is a palindrome or not");

function isPalindrome(str){
    let j = str.length-1
    for (let i = 0; i < str.length/2; i++){
        if(str[i] !=str[j]){
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "racecar"
console.log(isPalindrome(str1));

// Write a code to convert centimeter to kilometer.
console.log("Write a code to convert centimeter to kilometer.");
let centimeter = 100000
const kilometer = centimeter/100000
console.log(kilometer,"Km");

// Write a code to format number as currency (IDR)
console.log("Write a code to format number as currency (IDR)");

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

console.log(rupiah(10000));
 
// Write a code to remove the first occurrence of a given “search string” from a string
console.log("Write a code to remove the first occurrence of a given “search string” from a string");
function remove_first_occurrence(str, searchstr){
    var index = str.indexOf(searchstr);
    if (index===-1){
        return str;
    }
    return str.slice(0, index)+str.slice(index+searchstr.length);
}

console.log(remove_first_occurrence("Hello World", "ell"));

// Write a code to capitalize the first letter of each word in a string
console.log("Write a code to capitalize the first letter of each word in a string");
function capitalize_Words(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});
}

console.log(capitalize_Words("hello world"));

// Write a code to swap the case of each character from string 
console.log("Write a code to swap the case of each character from string ");
var str = "uybBIUHIijni";

var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";

var result = [];

for (var X = 0; X < str.length; X++){
    if (UPPER.indexOf(str[X])!==-1){
        result.push(str[X].toLowerCase());
    }
    else if (LOWER.indexOf(str[X])!==-1){
        result.push(str[X].toUpperCase());
    }
    else {result.push(str[X]);

    }
}

console.log(result.join(" "));

// Write a code to find the largest of two given integers
console.log(`Write a code to find the largest of two given integers
`);
function findLargest(a , b) {
    if (a > b) {
        return a + "adalaha bilangan terbesar";
    }
    else if (b > a) {
        return b + "adalah bilangan terbesar";
    }
    else {
        return "kedua bilangan sama besar"
    }
}

let num1 = 10;
let num2 = 25;
console.log(findLargest(num1,num2));

// Write a conditional statement to sort three numbers
console.log("Write a conditional statement to sort three numbers");
function sortThreeNumbers(num1, num2, num3) {
  let smallest, middle, largest;

  if (num1 <= num2 && num1 <= num3) {
    smallest = num1;
    if (num2 <= num3) {
      middle = num2;
      largest = num3;
    } else {
      middle = num3;
      largest = num2;
    }
  } else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
    if (num1 <= num3) {
      middle = num1;
      largest = num3;
    } else {
      middle = num3;
      largest = num1;
    }
  } else {
    smallest = num3;
    if (num1 <= num2) {
      middle = num1;
      largest = num2;
    } else {
      middle = num2;
      largest = num1;
    }
  }

  return [smallest, middle, largest];
}

console.log(sortThreeNumbers (1,2,3));

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
console.log("Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.");
function checkDataType (input) {
    if (typeof input === "string") {
        return 1;
    }
    else if (typeof input === "number") {
        return 2;
    }
    else {
        return 3;
    }
}
console.log(checkDataType(123));

// Write a code to change every letter a into * from a string of input
console.log("Write a code to change every letter a into * from a string of input");
function replace(input) {
    return input.replace(/a/g, "*");
}

console.log(replace("banana"));





