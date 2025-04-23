// find unique element from 2 arrays 

// function uniqueArr(arr1, arr2) {
//    let mergeArr = [...arr1, ...arr2];
   
//    let setArr = new Set(mergeArr);
//    let uiqueArray = [...setArr]
//    return uiqueArray;
   
// }

// const arr1 = [4,5,6,6,8,9,9,9,2,3]; 
// const arr2 = [4,5,6,6,8,6,6,6,,2,5,5]; 
// console.log(uniqueArr(arr1, arr2));

// another way //////////////////////////////////////////////////////////////////////////////
// function uniqueArr(arr1, arr2) {
//    let resultArr = [];
   
//    for(let i=0; i<arr1.length; i++){
//        if(!resultArr.includes(arr1[i])){
//          resultArr.push(arr1[i]);
//        }
 
//    }
 
//    for(let j=0; j<arr2.length; j++){
//        if(!resultArr.includes(arr2[j])){
//          resultArr.push(arr2[j]);
//        }
//    }
//    return resultArr
//  }
 
//  const arr1 = [4,5,6,6,8,9,9,9,2,3]; 
//  const arr2 = [4,5,6,6,8,6,6,6,2,5,5,88,88,90,90,60]; 
//  console.log(uniqueArr(arr1, arr2));


 /////another way usnig forOf //////////////////////

//  function uniqueArr(arr1, arr2) {
//    let resultArr = [];
   
//    for(let num of arr1){
//        if(!resultArr.includes(num)){
//          resultArr.push(num);
//        }
 
//    }
 
//    for(let num of arr2){
//        if(!resultArr.includes(num)){
//          resultArr.push(num);
//        }
//    }
//    return resultArr
//  }
 
//  const arr1 = [4,5,6,6,8,9,9,9,2,3]; 
//  const arr2 = [4,5,6,6,8,6,6,6,2,5,5,88,88,90,90,60]; 
//  console.log(uniqueArr(arr1, arr2));

 //// you can use set also 

 // merge and make unque array;

function unique(arr1,arr2){
  let uniqueArr = new Set();
  
  for(let num of arr1){
      uniqueArr.add(num);
  }
  for(let num of arr2){
      if(!uniqueArr.has(num)){
          uniqueArr.add(num);
      }
  }
  
  return [...uniqueArr];
     
 }
 
 const arr1 = [4,5,6,6,8,9,9,9,2,3]; 
 const arr2 = [4,5,6,6,8,6,6,6,2,5,5]
 console.log(unique(arr1,arr2));