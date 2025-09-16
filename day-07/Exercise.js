// 1
console.log(1);
function mergeStudents(array1, array2) {

  let combined = array1.concat(array2);

  let result = [];

  for (let student of combined) {

    let exists = result.some(s => s.email === student.email);

    if (!exists) {
      result.push(student);
    }
  }

  return result;
}

let array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" }
];

let array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" }
];

let arrayResult = mergeStudents(array1, array2);

console.log(arrayResult);

// 2
console.log(2);
function switchKeyValue(array) {
  let result = [];

  for (let obj of array) {
    let newObj = {};

    for (let key in obj) {
      let value = obj[key];
      
      newObj[value] = key;
    }

    result.push(newObj);
  }

  return result;
}

let input = [{ name: 'David', age: 20 }];

let output = switchKeyValue(input);

console.log(output);

// 3
console.log(3);
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

let number = 5;
let result = factorial(number);

console.log(number + "! = " + result);


