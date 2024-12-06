const array = [1,2,3]

const double = (n) =>{
    return n*2
}

const output = array.map(double)
// console.log("output :",output)
// console.log("original :",array)

const filterd = array.filter((elem)=>elem%2 == 0 )
// console.log(filterd)

// console.log(array.reduce()) 

const mytotal = array.reduce((acc,curr)=>(
    acc+curr
))

console.log(mytotal)