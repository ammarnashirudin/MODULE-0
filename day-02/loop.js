// while loop
let a = 1;
while (true) {
  console.log("ini while");

  if (a == 5) {
    break;
  }

  a++;
  // i++; // i = i + 1, i += 1
}

console.log("sudah selesai looping");

// for loop
for (let j = 10; j > 0; j--) {
  if (j == 8) {
    console.log("ketemu break");
    // break, akan menghentikan operasi looping secara paksa
    break;
  }

  console.log(j);
}
console.log("ketemu break looping selesai");

for (let j = 10; j > 0; j--) {
  if (j == 8) {
    console.log("ketemu continue");
    // break, akan menghentikan operasi looping secara paksa
    continue;
  }
  // code dibawah ini tidak akan dibaca ketika ketemu operator continue
  console.log(j);
}
console.log("looping selesai");

// // do while
let x = 11;
do {
  console.log(x, "ini do while");
  x++;
} while (x < 10);

let n = 25;

if (n <= 1) {
  console.log("bukan bilangan prima");
} else {
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) {
      console.log("bukan bilangan prima");
      break;
    }
  }
}

let buah = "semangka";

// // or operator (||), jika salah satu kondisi mereturn true maka block of code akan dijalankan
if (buah === "apel" || buah === "jeruk" || buah === "semangka") {
  console.log("Buah dijual");
} else {
  console.log("Buah tidak dijual");
}

// // and operator (&&), jika salah satu kondisi mereturn false maka block of code tidak akan dijalankan
if (buah === "apel" && buah === "jeruk") {
  console.log("Buah dijual");
} else {
  console.log("Buah tidak dijual");
}

// Latihan

function exam(batas_atas, batas_bawah){
  for(let i = batas_bawah; i <= batas_atas; i++){
    console.log(i);
    
  }
      
}

console.log(exam(100, 20));

function forloop(atas, bawah){
  for(let a = bawah; a <= atas; a++){
    console.log(a);
  }
}

console.log(forloop(100,30));

function loop(ats, bwh){
  for(let s = bwh; s <= ats; s++){
    console.log(s);
  }
}
console.log(loop(200, 2));

function multiplicatio (number){
  for(let i = 1 ; i <= number ; i++){
    console.log(i*number);
  }
}

console.log(multiplicatio(10));


function sqas(number){
  let sum = 0;
  for(let i = 1; i <= number ; i++){ 
    sum += i;
   }
   console.log("Hasil Penjumlahan",sum);
}
sqas(100);


function factorial(number){
  let sum = 1;
  for(let i = 1; i <= number; i++){
    sum *= i;
  }
  console.log("Hasil Faktorial :", sum);
}

factorial(40)


function segitigaBintang(baris) {
  for (let i = 1; i <= baris; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
      bintang += "*";
    }
    console.log(bintang);
  }
}

segitigaBintang(5);

function segitigaTerbalik(number){
  for(let i = number; i >= 1 ; i--){
    let bintang = "";
    for(let j = 1 ; j <= i; j++){
      bintang += "*";
    }
    console.log(bintang);
  }
  
}
console.log(segitigaTerbalik(5));

function persegi(number){
  let row = "";
  for(let i = 0; i < number; i++){
    row += "*";
    for(let j = 0; j < i; j++){
      console.log(row);
    }
  }
}
console.log(persegi(5));

function fibonachi(number){
  let a = 0, b = 1;
  for(let i = 0 ; i < number; i++){
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

fibonachi(12)
