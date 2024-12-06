const ObjLitteral={
    "username":"Rahul",
    loginCount:23,
    SignedIn:false,

}



function User(username, IsLoggedin, Age){
    this.username = username
    this.IsLoggedin = IsLoggedin
    this.Age = Age

    return this 

}
function UUser(username, IsLoggedin, Age){
    this.username = username
    this.IsLoggedin = IsLoggedin
    this.Age = Age

    return this 

}

const userOne = new User("Rahul",false,12)
const userTwo = new User("Chaudhary",true,21) //Before adding the `new` keyword ## Overwriting the values , After adding the `new` and this is the isntance of the user fucntion now what is instance consider that its a copy of the fucntion that creating one object ?? got it instance  is just like that the copy of that we can say here that is the `userTwo` and `userOne` is the instance of the `User` fucntion. 

console.log(userOne.constructor)
console.log(userTwo instanceof UUser)


// Whenever we use the keyword `new` the steps are like these :- 

// 1.Creating one empty object
// 2.Because of the `new` keyword the construction function call automatically and pack the all agruments and give it to yoou 
// 3. that all obj data that has created cause of the arguments enjected into the `this` keyword

// 4.finally get the new object . 



NewName = "NOT A TYPE"
console.log(NewName)