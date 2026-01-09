const promiseOne = new Promise(function(resolve, reject){
 //DO an async task 
 //DB calls, crptography, network
 setTimeout(function(){
  console.log('async task is completed');
  resolve()
 }, 1000)
})

promiseOne.then(function(){
 console.log('promise consumed');
})

// other method withput generating element
new Promise(function(resolve, reject){
 setTimeout(function(){
  console.log('async task done');
  resolve()
 },1000)
}).then(function(){
 console.log('2ns sync complete');
})

const promiseThree = new Promise(function(resolve, reject){
 setTimeout(function(){

   resolve({username: "chai", email: "chai@example.com"})
 },1000)
})

promiseThree.then(function(user){
 console.log(user);

})

const promiseFoure = new Promise(function(resolve, reject){
 setTimeout(function(){
  let error = true;
  if(!error){
   resolve({username: "Dhaval", password: "123"})
  }else{
   reject('ERROR: Something went wrong')
  } 
 },1000)
})
promiseFoure
.then((user)=>{
 console.log(user);
 return user.username
})
.then((username)=>{
console.log(username)
})
.catch(function(error){
 console.log(error)
})
.finally(()=>{
 console.log("The promise is done")
})

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({courese_name: "Js", password: "123"})
    }else{
      reject('Error: Js went erong')
    }
  },1000)
})

async function consumePromiseFive(){
  try{const response = await promiseFive
  console.log(response);
  }catch{
    console.log('Error')
  }
}

consumePromiseFive();
/*
async function getAllUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();
*/

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

  