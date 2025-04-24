// Write a function that simulates an asynchronous counter. The function should:
// 1.	Start counting from 1 to n.
// 2.	Print each number after a delay of i * 1000ms (where i is the current number).
// 3.	Return a Promise that resolves when counting is complete.

function counter(num){
    for(let i=1; i<=num; i++){
        setTimeout(()=>{
            console.log(i)
        }, i*1000)
    }
}

// console.log(counter(10));
counter(10);


