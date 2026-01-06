//if

//const isUserLoggedIn = true;

/*
if(2=='2'){
    console.log('The condition is true in first case');
}
if(2==='2'){
    console.log('The condition is true in strict case');
} else {
    console.log('The condition is false in strict case');
}
*/

/*
const score = 200;

if(score > 100){
    let power = "fly"
    console.log(`You have done well, ${power  }`);
}
console.log(power); //error power is not defined
*/

const balance = 5000;

//if(balance > 1000) console.log('You are eligible for a credit card');  >> never make code like this

/*
if(balance > 1000){
    console.log('You are eligible for a credit card');
}else if(balance > 5000){
    console.log('You are eligible for a premium credit card');
}else{
    console.log('You are not eligible for a credit card');
}
    */

const isUserLoggedIn = true;
const hasCreditCard = true;

if(isUserLoggedIn && hasCreditCard){
    console.log('You are eligible for a credit card');
}

