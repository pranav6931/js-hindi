// finding the unique deveice names from array of strings

function deviceNamesSystem(devicenames) {
    // Write your code here
    let uniqueDevicenames = [];
    count = {};
    devicenames.forEach((e)=>{
        if(count[e]) {
            count[e]+=1;
            uniqueDevicenames.push(e+(count[e]-1))
        } else {
          count[e] = 1;
          uniqueDevicenames.push(e)
        }
    })
return uniqueDevicenames;
}

console.log(deviceNamesSystem(["mixer", "toaster", "mixer", 'mixer','toaster']))