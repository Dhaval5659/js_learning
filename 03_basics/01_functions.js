function sayMyName(){
    console.log("D");
    console.log("h");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("l");   
}

//sayMyName   //reference
//sayMyName() //execution / invocation / call

/*
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(10, 20);
addTwoNumbers(100, 200);
*/

/*
function addTwoNumbers(num1, num2){
    let sum = num1 + num2;
    return sum;
}

const returnValue = addTwoNumbers(10, 20);
console.log(returnValue);
*/

/*
function loginUserName(username){
    if(!username){                                       //username === undefined
        console.log("Please enter username");
        return;
    }
    return `${username} logged in successfully`;
}

console.log(loginUserName("Dhaval"));
*/

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,500,100,1000))

const user = {
    name: "Dhaval",
    age: 26,
    city:"Ahmedabad"                                                              
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);

}

//handleObject(user);
handleObject({
    name: "Madhav",
    age: 27,
    city:"Mumbai"                                                                   
});

const anArray = [1,2,3,4,5];

function handleArray(arr){
    return arr[2];
}

console.log(handleArray(anArray));



