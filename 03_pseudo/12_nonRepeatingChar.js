// print frist non repeating char 

function nonrepeating(str){
    let myMap = new Map();
    
    for(let val of str){
        if(myMap.has(val)){
            myMap.set(val, myMap.get(val) + 1)
        }else{
            myMap.set(val, 1);
        }
    }
    console.log(myMap)
    for(let [key,val] of myMap){
        //console.log(key,val);
        if(val === 1){
            return key
        }
    }
   return null
}
console.log(nonrepeating("eeeerrrtyydfff"))