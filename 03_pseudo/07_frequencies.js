// count element frequencies in a array

function frequencies(arr) {
    let myMap = new Map();
    for (let num of arr) {
        // if myMap has the key then increase count
        // else set that value count 1
        if (myMap.has(num)) {
            myMap.set(num, myMap.get(num) + 1);
        } else {
            myMap.set(num, 1);
        }
    }
    console.log(myMap);

    let resultArr = [];
    for (let [key, value] of myMap) {
        resultArr.push(`${key}:${value}`);
    }
    return resultArr;
}

console.log(frequencies([1, 1, 1, 5, 8, 8, 8, 9, 9, 0, 0, 6, 5, 4]))

///////////////

function repeat(str) {
    let myMap = new Map();
    const newStr = str.replace(/\s/g, "").toLowerCase();
    console.log(newStr)

    for (let char of newStr) {
        if (myMap.has(char) && char !== "") {
            myMap.set(char, myMap.get(char) + 1);
        } else {
            myMap.set(char, 1)
        }
    }

    let resultMap = []
    for (let [key, value] of myMap) {
        resultMap.push(`${key}: ${value}`)
    }
    return resultMap
}

let str = 'This is a string'
console.log(repeat(str));