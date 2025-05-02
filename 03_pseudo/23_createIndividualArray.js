// input : const a = [1,2,3,[5,6],7]
// copy of this array and make new array

function newArray(a){
    let myArr = [];
    a.map((ele)=>{
        myArr.push(ele);
    })
    return myArr
}

const a = [1,2,3,[5,6],7]
console.log(newArray(a))
console.log(a)