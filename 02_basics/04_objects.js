//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

//console.log(tinderUser);

const regularUser = {
    email: "dhaval@ms.com",
    fullname :  {
        usersfullname: {
            firstname: "Dhaval",
            lastname: "Patel"
        }
    }
}

//console.log(regularUser.fullname.usersfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = {obj1, obj2,}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}    
//console.log(obj3);

const users = [
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 2, 
        email: "d@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    }
]

users[1].email
/*
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));
*/
const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Dhaval Patel"
}

//course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);
/*
{
    "name": "Dhaval",
    "age": 26,
    "city":"Ahmedabad"                                                                   
}*/

