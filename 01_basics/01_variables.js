const accountId = 144553
let accountEmail = "dhaval.2@gmail.com"
var accountPassword = "1234560"
accountCity = "AHM"

//accountId = 2 >>not allowed

accountEmail = "ags@gmail.com"
accountPassword = "2345657"
accountCity = "Rajkot"

console.log(accountId);
/*
prefer not to use var  
because of issue in block scope and functional scope 
*/

console.table([accountEmail, accountId, accountPassword, accountCity])
