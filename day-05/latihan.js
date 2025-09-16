// 
function Name(arr){
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i]);
    }
}
const result = ["hai", "jij", "jsaod"];
Name(result)

function FirstLast(arr){
        console.log("Angka Pertama :", arr[0]);
        console.log("Angka Terakhir :", arr[arr.length-1]);
}

const hai = [1,2,4,56,6,6];
FirstLast(hai);

function add(Number){
    let sum = 0;
    for(let i = 0; i < Number.length; i++){
        sum += Number[i]
    }
    console.log(sum);
    
}
let high = [321,43,365,77,245];
add(high);


function eror(num){
    num.push(60);
    return num;
}
let ar = [12,3,4,45];
console.log(eror(ar));

function dele(arr){
    arr.shift();
    return arr;
}

let rew = [231,42,4,65,23];
console.log(dele(rew));
 
function chnge(arr, i, element){
    arr[i] = element;
    return arr;
}
let row = ["Apel", "Jeruk", "Mangga"]
console.log(chnge(row, 1, "pisang"));


function MinMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return {max, min};
}
let hi = [21,434,54,234,36];
let resultz = MinMax(hi);
console.log("Hasil Maks :",resultz.max);
console.log("Hasil Min :",resultz.min);

function ForLoop(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        
    }
}
let a1 = [12,3,435,54];
ForLoop(a1);

function mean(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
    }
    let mean = sum / arr.length;
    return mean;
}
let io = [100,44,325,54];
console.log(mean(io));

function genap (arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            console.log(arr[i]);
        }
    }
}
let wqe = [21,43,2,454,54,324,65];
genap(wqe);

function reverse(arr){
    let ios = arr.reverse();
    console.log(ios);
    
}
let qwoi = [23,423,554,6,656,654];
reverse(qwoi);

function grab(arr1, arr2){
    let NewArray = arr1.concat(arr2)
    console.log(NewArray);
}
grab([21,213,321,132], [231,312,324,324]);

function Type(arr, object){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === object){
            return true;
        } 
    }
    return false;
}

let angka = [12,2,32,4,35];
let target = 12;
if(Type(angka, target)){
    console.log(target + " ada di dalam array.");
} else {target + " tidak ada di dalam array"};


function matriks(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            let el = "Elemen [ " + i + "][" + j + "] = " + arr[i][[j]]; 
            return el;
        }
        
    }
    
}

console.log(matriks(
    [1,2,3],
    [2,3,5],
    [33,3,3]
));

