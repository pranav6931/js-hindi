const user = {
    username : "pranav",
    price : 500,

    welcomMsg : function() {
        console.log(`${this.username} , welcome to this website`);
        console.log(this);
        
    }
}

user.welcomMsg();