//  Sum of Digits of a Number

num = 123;

sum = 0;
  
while(num > 0) {                          // bhai bas while loop ko dhynaad me rakhna
rem = num % 10;                               // Get the last digit (e.g., 123 % 10 = 3)

num = Math.floor(num /10);                     // Remove the last digit (e.g., Math.floor(123 / 10) = 12

sum = sum + rem;
}

console.log(sum)