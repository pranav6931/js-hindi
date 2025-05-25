async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("pass")
            } else {
                reject("fail")
            }
        }, 2000)
    })
}

async function getData() {
    try {
        let data = await fetchData();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
getData()