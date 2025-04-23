
console.log(Math.round(2.3));
console.log(Math.random());      // 0 to 1 ke bich me value aayegi randomely

//  Date
let myDate = new Date();
console.log(myDate);

let g = myDate.toLocaleString('default',{
    weekday : "long"
   })

console.log(g);

// prefix and postfix
let gameCounter = 100;
gameCounter++                    // 101
++gameCounter                    // 102    // prefix ad postfix working same 
console.log(gameCounter);

// postfix : increments value and returns the value before increment 
    // ( x++ : ++ is increment , x is value. so here x is before the increment so value should be before the increment)
// prefix : increments value and returns the value after increment
    // ( ++x : ++ is increment , x is value. so here x is after the increment so value should be after the increment)

let x = 10;
console.log(`x:${x}`);   // 10
const y = x++;
console.log(`x:${x} and y:${y}`);  // 11 and 10


let v = 10;
const w = ++v;
console.log(`${v} and ${w}`);   // 11 and 11