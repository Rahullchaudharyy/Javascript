// The ways of declaring the objects 

// litrals  => Not a singleTon
// construction => SingleTon ... // Object.create



// litrals 

const JsUser = {
    name:"Nothing Else ",
    key:"Vlaue",
    "age InNumber":12,
}
// By default the key in the objects consider as a string , that's why in the postman when we sent any data , in the json 
// then we sent like this { "name":"Rahul" } thats why in this method to access ["key-name"] with the striing , But in the jsUser.name we can 
// acccess that in the normal value 

// Accessing the value

// 1.with the help of  . !
  const typeCheak = JsUser.age
console.log( typeof typeCheak)

// 2. with the [] !

console.log(JsUser["name"])

// SingleTon 



const tinderUser = new Object()
tinderUser.id = 12;
tinderUser.name = "Rahul";
tinderUser.isLoggedIn = false;



const regularUser = {
  email:"ra@gmail.com",
  fullName:{
    userFullName:{
      firstName:"Rahul",
      lastName:"chaudhary"
    }
  }
}


// console.log(regularUser.fullName.userFullName.lastName)


const person = {
  name: "John",
  age: 30,
  city: "New York"
};


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};


// let Obj3 = Object.assign({},person,car)
let Obj3 = {...person,...car}

const user = [
  {
    id:2,
    email:"alkjfsd@gmail.com"
  },
  {
    id:2,
    email:"alkjfsd@gmail.com"
  },
  {
    id:2,
    email:"alkjfsd@gmail.com"
  },
  {
    id:2,
    email:"alkjfsd@gmail.com"
  },
  {
    id:2,           
    email:"alkjfsd@gmail.com"
  },
  {
    id:2,
    email:"alkjfsd@gmail.com"
  },
  {
    id:2,
    email:"alkjfsd@gmail.com"
  },

]

console.log(Obj3)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))


const {name:NewUser} = tinderUser
console.log(NewUser)