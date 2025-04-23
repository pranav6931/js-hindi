// sort array 

function sorting(arr){
    for(let i=0; i<arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        //swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr;
}

let arr = [5, 3, 8, 0, 1, 2];
console.log(sorting(arr));
