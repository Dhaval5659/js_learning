const name = 'Dhaval'
const repoCount = 50 

//console.log(name + repoCount + "value");  => no good to use 

console.log(`My name is ${name} and my repo count is ${repoCount}`)

const name1 = new String('DhavalM') // other way to define string

//console.log(name1[0]);
//console.log(name1.__proto__);
//console.log(name1.length);
//console.log(name1.toUpperCase);

console.log(name1.charAt(2))
console.log(name1.indexOf('v'))

const newString = name1.substring(0, 4) // provide char of 0 1 2 3 not 4
console.log(newString)

const anotherString = name1.slice(-5,4) // it can evaluate -ev values aswell
console.log(anotherString)

const newStringOne = "   Dhaval   "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "http://localhost/dhaval20%patel"

console.log(url.replace('20%','-'))
console.log(url.includes('dhaval'))
console.log(name1.split('-'));


