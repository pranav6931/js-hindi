const fetchUser1 = fetch('https://jsonplaceholder.typicode.com/users/1');
const fetchUser2 = fetch('https://jsonplaceholder.typicode.com/users/2');
const fetchUser3 = fetch('https://jsonplaceholder.typicode.com/users/3');


Promise.all([fetchUser1,fetchUser2,fetchUser3]).then((res)=>{
    return Promise.all(res.map((r)=>{
        return r.json();
    }));
}).then((data)=>{
    const [data1,data2,data3] = data;
    console.log(data1);
    console.log(data2);
    console.log(data3);
}).catch((error)=>{
    console.log(error);
})


// 25. Promise.all() vs Promise.race() vs Promise.allSettled()?
// Use Promise.all() when all promises must succeed.
// Use Promise.race() when you want the first response, successful or failed.
// Use Promise.allSettled() when you want to handle every result individually, regardless of success or failure.