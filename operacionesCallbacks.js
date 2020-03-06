const change = (x, next) => {
    z = x + 1
    y = next(z)
    return y
}
    

const forTen = (x) => {
    y = x*10
    return y
}


const forFive = (x) => {
    y = x*5
    return y
}


value = 2 //no se puede modificar


// que el valor de res1 sea 15
var res1 = change(value, forFive)
console.log(res1)


// que el valor de res2 sea 30
var res2 = change(value, forTen)
console.log(res2)


var res3 = change(change(value,forFive),forTen)
// ¿Cuánto vale res3 acá? No vale hacer console.log ni nada por el estilo.

console.log(res3)