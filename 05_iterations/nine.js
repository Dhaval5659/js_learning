const num = [1,2,3]
/*
const total = num.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0) 

console.log(total)
*/

const shoppingCart = [
     {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay)