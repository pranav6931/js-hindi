// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json()) 
//   .then(users => {
//     console.log('Users:', users);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// using then catch 
fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json();
}).then((users) => {
    console.log(users)
}).catch((error) => {
    console.log(error)
})

// using async await - try catch
async function getUserDetail() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        console.log(users)
    } catch (error) {
        console.log(error);
    }
}
getUserDetail()