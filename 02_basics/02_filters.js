// filter : forEach value return nhi krta , but filter karta hain, isme condition lagana pdta hain

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myArray.filter((num) => num < 5);
console.log(newNums);

// in diff way
const newNums1 = myArray.filter((num) => {
   return num < 5                                    // curly braces se agar scope open kiya ho to return keyword lgana pdega 
});
console.log(newNums1);

///////////////////

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016}
];

const newBooks = books.filter((bk)=>{
   return bk.genre == 'Fiction';
});
console.log(newBooks);

// map : it automatically returns the value, isme condition nhi lagana pdta

const myArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newMyArray = myArray4.map((num)=>{
   return num+10;
})
console.log(newMyArray);

// chaining 

const newMyArray1 = myArray4
                     .map((num)=>num*10)
                     .map((num)=>num+2)
                     .filter((num)=>num>40);
console.log(newMyArray1);


// reduce : isme accumulator, currentValue - accumulator ki initial value hume set karni padti hain.

const myArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const newMyArray5 = myArray5.reduce((acc,currVal)=>{
   console.log(`acc: ${acc}, currVal: ${currVal}`);
    return acc + currVal
},0)                                                     // accumulator ki initial value yaha set karte hain
console.log(newMyArray5);
