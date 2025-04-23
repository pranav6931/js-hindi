let str = "mainhudon";
let result = "";

for (let i = 0; i < str.length; i++) {
  // Even index (0, 2, 4, ...)
  if (i % 2 === 0) {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}

console.log(result); // Output: "MaInHuDoN"