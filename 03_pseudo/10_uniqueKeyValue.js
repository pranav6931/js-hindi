// print unique key value pair, sum if similar

function uniquePair(obj1, obj2) {
    resultObj = {};
    for (let key in obj1) {
        resultObj[key] = obj1[key];
    }
    // resultObj = obj1;
    // console.log(resultObj);

    for (let key in obj2) {
        if (resultObj.hasOwnProperty(key)) {
            resultObj[key] = resultObj[key] + obj2[key];
            // b             =   5            +   6
        } else {
            resultObj[key] = obj2[key];
        }
    }
    return resultObj;
}

const obj1 = { a: 2, b: 5, c: 10 };
const obj2 = { b: 6, c: 5, e: 10 };
console.log(uniquePair(obj1, obj2));