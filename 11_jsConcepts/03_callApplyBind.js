// call 
const myObj1 = {
    name: 'pranav',
    greet: function (greeting) {
        console.log(`hello ${this.name}`)
    }
}

const myObj2 = {name : 'kartik'};

myObj1.greet.call(myObj2, 'hello' );

// apply

const myObj3 = {
    name: 'pranav',
    greet: function (greeting) {
        console.log(`hello ${this.name}`)
    }
}

const myObj4 = {name : 'kartik'};

myObj3.greet.apply(myObj4, ['hello'] )

// bind

const myObj5 = {
    name: 'pranav',
    greet: function (greeting) {
        console.log(`hello ${this.name}`)
    }
}

const myObj6 = {name : 'kartik'};
const myBind = myObj5.greet.bind(myObj6, 'hello' )
myBind()