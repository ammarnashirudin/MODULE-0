// Write a code to find area of rectangle.
var length = 5;
var width = 3;
const areaOfRectangle = length*width;
console.log("Write a code to find area of rectangle");
console.log("Area of Rectangle :",areaOfRectangle);

// Write a code to find perimeter of rectangle.
var length = 5;
var width = 3;
const perimeterOfRectangle = length*width;
console.log("Write a code to find perimeter of rectangle");
console.log("Perimeter of Rectangle :",perimeterOfRectangle);

// Write a code to find diameter, circumference and area of a circle
var radius = 5;
const Diameter = 2*radius;
const Circumference = 2*Math.PI*radius;
const Area = Math.PI*radius^2;
console.log("Write a code to find diameter, circumference and area of a circle");
console.log("Diameter :",Diameter);
console.log("Circumference :",Circumference);
console.log("Area :",Area);

// Write a code to find angles of triangle if two angles are given
var a = 80;
var b = 65;
const Angles = 180 - (a+b);
console.log("Write a code to find angles of triangle if two angles are given");
console.log("Angles :",Angles);

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
var days = 400;
const year = days/365; //1
const MonthOverall = days/30; //12
const MonthOfYear = Math.floor(MonthOverall)-12*Math.floor(year); //MonthOverall-12;
const daysYear =  (days)-(Math.floor(year)*365)-(MonthOfYear*30); //days - MonthOverall; 
console.log("Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days)");
console.log("Year :",Math.floor(year));
console.log("Month :",MonthOfYear);
console.log("Day :",daysYear);

// Write a code to get difference between dates in days
var Year1 = 2022;
var Year2 = 2022; 
var Month1 = 1;
var Month2 = 1;
var Day1 = 20; 
var Day2 = 22;
const Year = Year1-Year2;
const Month = Month1-Month2;
const Day = Day2-Day1;
const DifferenceBetweenDatesInDays = (Year*365)+(Month*30)+(Day);
console.log("Write a code to get difference between dates in days");
console.log("Day :",DifferenceBetweenDatesInDays);








