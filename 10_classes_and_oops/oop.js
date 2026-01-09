const user ={
 username: "dhaval",
 logincount: 8,
 signedIn: true,

  getUserDetails: function(){
  //console.log("Got user detail from database");
  //console.log(`Username: ${this.username}`);
   console.log(this);
 }

}

//console.log(user.username);     
//console.log(user.getUserDetails());
//console.log(this);

function User(username, logincount, isLoggedIn){
 this.username = username;
 this.logincount = logincount;
 this.isLoggedIn = isLoggedIn;

 return this
}

const userOne = new User("Dhaval", 12, true)
const userTwo = new User("meet", 11, true)

console.log(userOne);
  