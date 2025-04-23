// reverse string 

function reverse(str){
    let reverseStr = "";

    for(let i =str.length- 1; i>=0 ; i--){           // add index char from end
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
}

console.log(reverse("hello"));
