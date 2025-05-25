// Falsy values in conditional check

// false. -0, 0, BigInt On, "", null, undefined, NaN


// Nullish Coalescing Operator ??

val1 = null ?? 10               // if 1st value is null then it assign 2nd value
console.log(val1);             // o/p : 10

val2 = null ?? null ?? 30               // if 1st and 2nd value is null then it assign 3rd value
console.log(val2);             // o/p : 30