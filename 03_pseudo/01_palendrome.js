// Palendrome

function isPalendrome(str){
   // phase1 : remove non-alphanumeric char and transform str toLowerCase
   let cleanStr = '';
   for(let i=0; i<str.length; i++){
      let char = str[i].toLowerCase();
      if((char<='z' && char>='a') || (char<='9' && char>='0')){
         cleanStr = cleanStr+char;
      }
   }
   console.log(cleanStr);
   // phase2 : compare left and right index char
   let left = 0;
   let right = cleanStr.length-1;
   while(left<right){
     if(cleanStr[left] !== cleanStr[right]){
        return false
     };
     left++;
     right--;
   }
   return true;
}

let str = "pranavuvanarp"
console.log(isPalendrome(str));
