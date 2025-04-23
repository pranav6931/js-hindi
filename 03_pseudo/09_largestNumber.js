///////largest number form array
// function findLargest(arr){
//     let result = 0;

//     for(let num of arr){
//         if(num > result){
//             result = num;
//         }
//     }
//     return result;

// }

// console.log(findLargest([4,5,6,8,2,90,4,80]))
/////////////////////////////////////////////////////////////////////////
// largest number from string 
function findLargest(str){
    let converArr = str.split(",")
    console.log(converArr);
    
    let result = 0;

    for(let num of converArr){
        let val = Number(num)
        if(val > result){
            result = val;
        }
    }
    return result;

}

console.log(findLargest("5,6,8,2,a90,4,80"));