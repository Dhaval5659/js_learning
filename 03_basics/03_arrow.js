const user = {
    username: "Dhaval",
    price: 999,
    welcommessage: function(){
        console.log(`${this.username}, welcome to the website!`);
        console.log(this);
    }
}

//user.welcommessage();
//user.username = "Patel"
//user.welcommessage();

//console.log(this);
/*
const chai = function(){
    let username = "Dhaval"
    console.log(this.username);
}
*/

/*
const chai = () => {
    let username = "Dhaval"
    console.log(this);
}

chai()

*/

const sum = (num1, num2) => num1 + num2  // doesn't require return keyword

console.log(sum(5,10));



