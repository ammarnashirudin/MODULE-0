let set :string = "Hallo";
set = "5"
console.log(set);
let num:number = 5;
let bool:boolean = true;
let fake:number[] = [1,2,3,4,5];
let arr2:Array<number> = [1,2,3,4,5];
let arr3:Array<string> = ["satu","dua","tiga"];
let arr4:(string|number)[] = [1,"dua",3,"empat",5];
// obj
interface Iobj {
    name : string,
    age : number
}
const obj:Iobj = {
    name : "budi",
    age : 20
}

interface Iproduct {
    name : string,
    price : number,
}

interface Icart {
    product : Iproduct[],
    qty : number,
}
interface ITransaction {
    addToCart: (product:Iproduct, qty:number) => void,
    showTotalMethod: () => number,
    checkOutMethod: () => {
        Total : number, 
        cart : Icart,
    }
}

class Product implements Iproduct{
    name: "";
    price: 0;

    constructor(_name:string, _price:number) {
        this.name = _name;
        this.price = _price;
    }
}

class Transaction implements ITransaction{
    #total : number = 0;
    #cart : Icart = {
        product : [],
        qty : 0,
    };
    addToCart: (product: Iproduct, qty: number) {
        this.#cart.product.push(product);
        this.#cart.qty += qty;
        this.#total += (product.price * qty);
    } 
    showTotalMethod() {
        return this.#total;
    }
    checkOutMethod() {
        return {
            const result = {
                Total : this.#total,
                cart : this.#cart,
            }
        };
        this.#total = 0;
        this.#cart = {
            product : [],
            qty : 0,
        };
        return result;
    }
}
const keyboard = new Product("keyboard", 3000);
const mouse = new Product("Teh Pucuk", 5000);
const transaction = new Transaction();  
transaction.addToCart(keyboard, 2);
transaction.addToCart(mouse, 1);
console.log(transaction.showTotalMethod());
console.log(transaction.checkOutMethod());
