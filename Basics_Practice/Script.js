// console.log("Js UndersTangin and build something ,  nothing else")

// let num = 9007199254740992
// let  big  = BigInt(num)
// console.log(big)
// console.log(BigInt)

// console.log(typeof undefined) // undefined
// console.log(typeof null)  // Object





// let MyyArrays = [23,64,57,24,"Rahul"]

// console.log(MyyArrays.includes(34))
// console.log(MyyArrays.indexOf("Rahul"))
// // console.log(MyyArrays.includes(34))


// const newArray = MyyArrays.join()

// console.log(MyyArrays)
// console.log( newArray)

let OriginalArrays = [0,1,2,3,4,5,6]
console.log('Origina Arrays :',OriginalArrays)
   
// [1,4,2,4,2]
//  0 1 2 3 4

const SliceArrays = OriginalArrays.slice(0,4)
// Arrays.slice("Start Index from where u want to access ", "end Index till where u want to access ")
// slice method not modfy the actual value means not changes in the orignal arrays


console.log("Slice Value :", SliceArrays)
console.log("Origina Arrays after slice :", OriginalArrays)

const SpliceArray = OriginalArrays.splice(0,4)
// Arrays.splice("Start Index from where u want to delete ", "Count of the elements of an arrays want to delete", "On the place of the deleted array what you want to store")
console.log("Splice Value :", SpliceArray)
// Splice modify the actual arrays means the original array
console.log("Origina Arrays after splice :", OriginalArrays)


console.clear()