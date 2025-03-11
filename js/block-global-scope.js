//------------global scope----------
function sum (num1, num2){
    const number=  num1 + num2;
    // console.log(number)
}
sum(2,3)


//------------------block scope-----------------

{
    const x = 3
    // console.log(x);
}


// another
let z = 10;
{
    let y = 7
    // console.log(y)
}
z= 9;
// console.log(z)