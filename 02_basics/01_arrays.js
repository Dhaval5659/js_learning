//array 
// paranthisis > (), brackats > [], barasis > {}

const arr = [0, 1, 2, 3, 4]
const myHeros = ["Superman", "Spidy"]

const arr2 = new Array(1,2,3,4)

console.log(arr[0]);

// Array methods

//arr.push(6)
//arr.push(7)
//arr.pop()               //remove last element 

//arr.unshift(9)
//arr.shift()

//console.log(arr.includes(9))
//console.log(arr.indexOf(9));

const newArr = arr.join()

console.log(arr)
console.log(newArr)

// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);
