// comparison operator
// equal, apakah 1 value sama dengan value lainnya (hanya mengecek value tanpa mengecek tipe datanya)
console.log("apel" == "jeruk"); // akan mereturn false karena apel tidak sama dengan jeruk
console.log("1" == 1); // akan mereturn true karena == tidak melakukan pengecekan tipe data
console.log("1" == 5);

// strict equal, apakah 1 value sama dengan value lainnya (mengecek value dan tipe datanya)
console.log("1" === 1); // akan mereturn false karena string 1 tidak sama dengan number 1 (tipe datanya berbeda)

// greater than, mengecek apakah value lebih besar dari value lainnya
console.log(5 > 4); // akan mereturn true karena angka 5 lebih besar dari angka 4
console.log(5 > 5); // akan mereturn false karena angka 5 sama dengan angka 5, tidak lebih besar, tidak lebih kecil

// greater than or equal
console.log(5 >= 5); // akan mereturn true, karena 5 memang tidak lebih besar dari 5, tapi 5 sama dengan 5
console.log(5 >= 10); // akan mereturn false, karena 5 tidak lebih besar 10, 5 juga tidak sama dengan 10

// less than, mengecek apakah value lebih kecil dari value lainnya
console.log(5 < 1); // akan mereturn false, karena 5 tidak lebih kecil dari angka 1

// less than or equal
console.log(5 <= 1); // akan mereturn false, karena 5 tidak lebih kecil dari 1, 5 juga tidak sama dengan 1

// not equal
console.log(5 != "apel"); // akan mereturn true, karena 5 memang benar tidak sama dengan apel

// strict not equal
console.log(5 !== "5"); // akan mereturn true, karena angka 5 memang benar tidak sama dengan string 5

let angka = 55;
// apakah 0 sama dengan 0 => true
if (angka % 2 === 0) {
  // block code if, hanya akan dijalankan jika kondisi = true
  console.log(angka + " adalah bilangan genap");
} else {
  // block of code else, hanya akan dijalankan jika kondisi if diatas = false
  console.log(angka + " adalah bilangan ganjil");
}

let nilai = "D";

if (nilai == "A") {
  console.log("Nilai kamu sangat bagus");
} else if (nilai == "B") {
  console.log("Nilai kamu bagus");
} else if (nilai == "C") {
  console.log("Nilai kamu kurang");
} else {
  console.log("Nilai kamu sangat kurang");
}

angka = 5;
// if (angka == 5) {
//   console.log("angka sama dengan 5");
// } else if (angka >= 5) {
//   console.log("angka lebih besar dari 5 atau sama dengan 5");
// }

if (angka == 5) {
  console.log("angka sama dengan 5");
}

if (angka >= 5) {
  console.log("angka lebih besar dari 5 atau sama dengan 5");
}

let buah = "apel";
switch (buah) {
  case "apel":
    console.log("buah apel");
    break;
  case "mangga":
    console.log("buah mangga");
    break;
  case "jeruk":
    console.log("buah jeruk");
    break;
  default:
    console.log("buah tidak terdaftar");
}

// Lattihan
function X (number){
  if(number>0){
  return "Bilangan Positif";
  }
  else{"Bilangan Negatif"}
}
console.log(X(4));

function age(number){
  if (number>=18){
    return "Dewasa"
  }
  else {
    return "Belum Dewasa"
  }
}

console.log(age(18));

function value(number){
  if (number>=75){
    return "Lulus"
  }
  else {return "Tidak Lulus"
  }
}
console.log(value(60));

function bilangan(number){
  if (number % 2 === 0){
    return "Bilangan Genap"
  }
  else {return "Bilangan Ganjil"}
}

console.log(bilangan(2));

function Jam(number){
  if (number < 12){
    return "Selamat Pagi"
  }
  else if(number >= 12 && number < 18){
    return "Selamat Siang"
  }
  else if (number >= 18){
    return "Selamat Malam"
  }
}

console.log(Jam(12));

function terbesar(a,b,c){
  if (a>b && a>c){
    return a
  }
  else if (b>c && b>a){
    return b
  }
  else {return c}
}
console.log(terbesar(2,6,1));

function input(number){
  if (1 <= number && 100 >= number){
    if (number >= 90){
      return "A"
    }
    else if(number <= 80 || number >= 89){
      return "B"
    }
    else if(number <= 70 || number >= 79){
      return "C"
    }
    else if(number <= 60 || number >= 69){
      return "D"
    }
    else if(number < 60){
      return "E"
    }
  }
}

console.log(input(70));

function login(username, password){
  if(username == "admin" && password == "1234"){
    return "Login Berhasil"
  }
  else if(username !== "admin") {
    return "username salah"
  }
  else if(password !== "1234") {
    return "password salah"
  }
}
console.log(login("admin", "12"));

function year (number){
  if (number % 4 == 0 && number % 100 !== 0 || number % 400 == 0){ 
    return "Tahun Kabisat"
  }
  else {return "Bukan Tahun Kabisat"}
}

console.log(year(400));

