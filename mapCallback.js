const forTwo = (num) => {
  return num*2
}

const newArrayBuilder = (array, next) => {
  return array.map(num => next(num))
}
// Probando miMap
oldArray = [1,2,3,4,5]
let newArray = newArrayBuilder(oldArray, forTwo)
console.log(newArray) // arrayNuevo = [2,4,6,8,10] 
