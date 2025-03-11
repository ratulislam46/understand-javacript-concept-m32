
function sum (a,b,c,d){
    // console.log(a,b,c,d)
    const newArg = [...arguments];
    // console.log(newArg)
}
// sum(10,20,30,40,50,60,70);
// console.log(sum.length)

 
//  ----------------pass by value pass by reference----------------
let a = 10;
let b = 20;

function sum(num1, num2){
    num1 = 50;
    num2 = 79;
    // console.log(num1,num2)
}
// sum(a,b)
// console.log(a,b)


let person = {name: "Ratul", age: 22};

function sum(obg){
    obg.name = "Midul";
    obg.age = 25;
//    console.log(obg)
}
sum(person)