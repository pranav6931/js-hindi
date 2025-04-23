// Print duplicates in a array

function duplicates(arr){
    let exist = new Set();
    let duplicate = new Set();
    // iterate arr and chech it's existance
    for(let num of arr){
        // if num has in exist set array then it is duplicate so add it in duplicate array
        if(exist.has(num)){
            duplicate.add(num);
        } // else add it in seen 
        else{
            exist.add(num);
        }
    }
    return [...duplicate]
}

console.log(duplicates([3,3,3,4,5,6,6,6,8,8]))



