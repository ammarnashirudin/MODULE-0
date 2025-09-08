let fruits = ["apple", "orange", "plum"]
for (let fruit in fruits) {
    console.log(fruit);
    
}

const square = function (number){
    return number * number
}

const x = square(4);
console.log(x);


function sayHello(){
    console.log("Hello, World!");
}

sayHello();

function greeting(){
    const hello = "Hello"

    return hello;
    console.log("Hello");
}

function greeting (name){
    const hello = "Hello";
    return hello + " " + name;
}

console.log(greeting("David"));

function multiply(a, b = 1){
    return a*b;
}

console.log(multiply(5, 2));
console.log(5);


function myFunc(a, b, ...manyMoreArgs){
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFunc("one", "two", "three", "four");

function getMessage (firstName){
    function sayHello() {
        return "Hello" + " " +firstName;
    }

    function welcomMessage() {
        return "Welcome to Purwadhika!"
    }
    return sayHello() + " " + welcomMessage();
}

const message = getMessage ("David");
console.log(message);

function greeting(name) {
    const defaultMessage = "Hello"
    return function () {
        return defaultMessage + name;
    }
}

const greetingdavid = greeting("David");
console.log(greetingdavid())

