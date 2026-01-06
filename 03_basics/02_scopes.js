
if (true) {
    let a = 10
    var b = 20
    const c = 30
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // 20
// console.log(c); // ReferenceError: c is not defined

/*
function one(){
    const username = "Dhaval"
    function two(){
        const website = "ms.com"
        console.log(username);
    }
    
    //console.log(website);
    two()
}
one()
*/


if (true) {
    const username = "Dhaval"
    if(username === "Dhaval"){
        const website = " ms.com"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> Interesting <<<<<<<<<<<<<<<<<<<<<<<<<<<< //

console.log(addone(5));

function addone(num){
    return num + 1 
}

addtwo(5)  // Error: addtwo is not defined 


const addtwo = function(num){
    return num + 2
}

