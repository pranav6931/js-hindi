// Fibonacci series

function fibo(n){
    // will give result as fiboArray; and need to initialize first 2 index value
    let num1 = 0;
    let num2 = 1;
    let fiboArray = [num1,num2];   // initial fibo array 
    let sum;
    // now we have to loop count n-2, bcz starting 2 index value already defined
    for(let i = 0; i<n-2 ;i++) {
        sum = num1+num2;
        fiboArray.push(sum);
        num1 = num2;
        num2 = sum;
    }
    return fiboArray;
}

console.log(fibo(10));        // need to pass series limt