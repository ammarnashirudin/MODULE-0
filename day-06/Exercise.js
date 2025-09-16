// 1
console.log("No 1");

function calculateStudentData(students) {
  
  if (students.length === 0) {
    return {
      score: { highest: null, lowest: null, average: null },
      age: { highest: null, lowest: null, average: null }
    };
  }

  
  let ages = [];
  let scores = [];

  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let today = new Date();
    let age = today.getFullYear() - student.age.getFullYear();

    let monthDiff = today.getMonth() - student.age.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < student.age.getDate())) {
      age = age - 1; 
    }

    ages.push(age);
    scores.push(student.score);
  }

  
  let totalScore = 0;
  let totalAge = 0;
  for (let j = 0; j < scores.length; j++) {
    totalScore = totalScore + scores[j];
    totalAge = totalAge + ages[j];
  }

  
  let avgScore = totalScore / scores.length;
  let avgAge = totalAge / ages.length;

  let highestScore = Math.max.apply(null, scores);
  let lowestScore = Math.min.apply(null, scores);
  let highestAge = Math.max.apply(null, ages);
  let lowestAge = Math.min.apply(null, ages);

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: avgScore
    },
    age: {
      highest: highestAge,
      lowest: lowestAge,
      average: avgAge
    }
  };
}


let students = [
  { name: "Ammar", email: "ammar@mail.com", age: new Date(2000, 5, 10), score: 85 },
  { name: "Budi", email: "budi@mail.com", age: new Date(1998, 2, 20), score: 92 },
  { name: "Citra", email: "citra@mail.com", age: new Date(2002, 8, 15), score: 74 }
];

console.log(calculateStudentData(students));


// 2
console.log("No 2");

function Product(name, price) {
  this.name = name;
  this.price = price;
}


function Transaction() {
  this.products = [];
  this.total = 0;

  
  this.addToCart = function(product, qty) {
    this.products.push({ product: product, qty: qty });
    this.total = this.total + (product.price * qty);
  };

  
  this.showTotal = function() {
    console.log("Total transaksi sementara: Rp" + this.total);
    return this.total;
  };

  
  this.checkout = function() {
    
    let productList = this.products.map(function(item) {
      return {
        name: item.product.name,
        price: item.product.price,
        qty: item.qty,
        subtotal: item.product.price * item.qty
      };
    });

    let transactionData = {
      products: productList,
      total: this.total
    };

    console.log("=== Data Transaksi ===");
    console.log(transactionData);

    
    this.products = [];
    this.total = 0;

    return transactionData;
  };
}

let p1 = new Product("Indomie", 3000);
let p2 = new Product("Teh Botol", 5000);

let trx = new Transaction();
trx.addToCart(p1, 3);
trx.addToCart(p2, 2);
trx.showTotal();   
trx.checkout();



