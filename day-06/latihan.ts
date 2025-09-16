// 1. Class (Blueprint)
// class Mobil {
//   // Properties (atribut)
//   merk : string;
//   warna: string;
//   tahun: number;

//   // Constructor (untuk inisialisasi object)
//   constructor(merek: string, warna: string, tahun: number) {
//     this.merek = merek;
//     this.warna = warna;
//     this.tahun = tahun;
//   }

//   // Method (perilaku)
//   info(): void {
//     console.log(`Mobil: ${this.merek}, Warna: ${this.warna}, Tahun: ${this.tahun}`);
//   }
// }

// // 2. Object (instance dari class)
// const mobil1 = new Mobil("Toyota", "Merah", 2022);
// mobil1.info(); // Output: Mobil: Toyota, Warna: Merah, Tahun: 2022


// // 3. Inheritance (Pewarisan)
// class Sedan extends Mobil {
//   tipe: string;

//   constructor(merek: string, warna: string, tahun: number, tipe: string) {
//     super(merek, warna, tahun); // memanggil constructor dari class Mobil
//     this.tipe = tipe;
//   }

//   // Polymorphism (method dengan perilaku berbeda)
//   info(): void {
//     console.log(`Sedan: ${this.merek}, Tipe: ${this.tipe}, Warna: ${this.warna}, Tahun: ${this.tahun}`);
//   }
// }

// const sedan1 = new Sedan("Honda", "Hitam", 2023, "Civic");
// sedan1.info(); // Output: Sedan: Honda, Tipe: Civic, Warna: Hitam, Tahun: 2023


// // 4. Encapsulation (pakai getter dan setter)
// class AkunBank {
//   private saldo: number;

//   constructor(saldoAwal: number) {
//     this.saldo = saldoAwal;
//   }

//   // Getter
//   getSaldo(): number {
//     return this.saldo;
//   }

//   // Setter
//   setor(uang: number): void {
//     this.saldo += uang;
//   }

//   tarik(uang: number): void {
//     if (uang <= this.saldo) {
//       this.saldo -= uang;
//     } else {
//       console.log("Saldo tidak cukup!");
//     }
//   }
// }

// const akun = new AkunBank(1000);
// akun.setor(500);
// akun.tarik(200);
// console.log(akun.getSaldo()); // Output: 1300

// class plane {
//     name : string;
//     warna : string;
//     seri : number;  

//     constructor( name:string, warna:string, seri:number){
//         this.name = name;
//         this.warna = warna;
//         this.seri = seri;
//     }
//     instanceof():void{
//         console.log(`pesawat : ${this.name}, warna : ${this.warna}, seri : ${this.seri}`);
//     }
// }

// const plane1 =new plane ("buss", "hitam", 2023);
// const plane2 =new plane ("airbus", "pink", 2022);
// plane1.instanceof();
// plane2.instanceof();



// class animal{
//   nama : string;
//   jenis : string;

//   constructor(nama: string, jenis:string){
//     this.nama = nama;
//     this.jenis = jenis;
//   }
//   info():void{
//     console.log(`hewan:${this.nama}, jenis: ${this.jenis}`);
//   }
// }

// let singa = new animal ("singa" , "karnivora");
// let sapi = new animal ("sapi", "herbivora");
// singa.info();
// sapi.info();


class karyawan{
  name :string;
  umur : number;
  jenis_kelamin : string;
  no_ktp : number;

  constructor(name:string, umur:number, jenis_kelamin:string, no_ktp:number){
    this.name = name;
    this.umur = umur;
    this.jenis_kelamin = jenis_kelamin;
    this.no_ktp = no_ktp;
  }
  info():void{
    console.log(`karyawan : ${this.name}, umur : ${this.umur}, jenis kelamin : ${this.jenis_kelamin}, no ktp : ${this.no_ktp}`);;
  }
}

let karyawan1 = new karyawan("andi", 23, "laki-laki", 1234567);
let karyawan2 = new karyawan("siti", 22, "perempuan", 345678 );
karyawan1.info();
karyawan2.info(); 

class manager extends karyawan{
  
}
