// how to write promise syntax 

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("pass")
        } else {
            reject("fail")
        }
    }, 2000)
})

myPromise.then((resolve) => {
    console.log(resolve)
})
    .catch((reject) => {
        console.log(reject)
    })