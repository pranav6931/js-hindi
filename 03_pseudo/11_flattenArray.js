// flat nested array

function flattenArray(arr){
    let flatArr = [];
    for(let index of arr){
        if(Array.isArray(index)){
            flatArr = flatArr.concat(flattenArray(index));
        }else{
            flatArr.push(index);
        }
        
    }
    return flatArr;
}

console.log(flattenArray([2,[3,4,2,[4,6,8],9],[0,3],9,5]));

///////////////////////
function iter(str){
    for(let char of str){
        console.log(char);
        
    }
}

console.log(iter("pranav"));