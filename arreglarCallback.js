const sum = (num1,num2, next) =>{
    setTimeout(() =>{
        let res = num1 + num2;
        next(res)
    }, 1000);
}

sum(2,5, res => {
    console.log(res);
})


