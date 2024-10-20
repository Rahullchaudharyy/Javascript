const MarvelHeros = ['Iron Man', 'Spider-Man', 'Thor', 'Hulk', 'Captain America'];
const DCHeros = ['Batman', 'Superman', 'Wonder Woman', 'Aquaman', 'Flash'];


// MarvelHeros.push(DCHeros)
const Concat = MarvelHeros.concat(DCHeros)


console.log(Concat)


const spread = [...MarvelHeros,...DCHeros]

console.log(spread)

const MessedArrays = [1,2,3,4,[5,6,7],[8,9,[10,11,[12,13,14,14,[15]]]]]
console.log('MessedArrays :', MessedArrays)
// In this case its toufh to have a simple structres like it has the nested arrays 
// and all so for fix this we have the flat()

// Flat is not some thing but only the method to solve the nested arrays , nothing else
const GoodMannerArrays = MessedArrays.flat(Infinity)
console.log(GoodMannerArrays)