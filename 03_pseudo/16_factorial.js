// Factorial of a number  5 => 5*4*3*2*1 = 120

function factorial(num){
    let factorial = 1;
    for(let i=1; i<=num; i++){
        factorial = factorial*i
    }
    
    return factorial
}


console.log(factorial(4));