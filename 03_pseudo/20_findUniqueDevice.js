// finding the unique deveice names from array of strings

function deviceNamesSystem(devicenames) {
    // Write your code here
    let uniqueDevicenames = [];
    let count = {};
    devicenames.forEach((ele)=>{
        if(count[ele]) {
            count[ele] = count[ele] + 1;
            uniqueDevicenames.push(ele + (count[ele]-1))
        } else {
          count[ele] = 1;
          uniqueDevicenames.push(ele)
        }
    })
return uniqueDevicenames;
}

console.log(deviceNamesSystem(["mixer", "toaster", "mixer", 'mixer','toaster']))