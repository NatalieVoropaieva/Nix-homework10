const numbers ={
    a: 2,
    b: 10,
    c: -5,
    d: 'hello'
}

const multiplyNumeric = (obj) =>{
    for (let prop in obj){
        if(typeof obj[prop] === "number"){
            obj[prop]*=2;
        }
    }
}
multiplyNumeric(numbers)
console.log(numbers)