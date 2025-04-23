function titleCAse(str){
  let myArr = str.split("");
  myArr.unshift(" ");
    console.log(myArr);

    myArr.forEach((element, index)=>{
      if(element == " "){
        myArr[index+1] = myArr[index+1].toUpperCase();
      }
    })
    myArr.shift();
    let titleCase = myArr.join("");
    return titleCase;
  
}

let str = 'my name is pranav';
console.log(titleCAse(str))