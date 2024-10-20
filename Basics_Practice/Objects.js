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




